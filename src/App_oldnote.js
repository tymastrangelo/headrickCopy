import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Table,
  TableBody,
  Link,
  TableHead,
  TableRow,
  TableCell,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const App = ({ signOut, user }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    console.log("hi")
    console.log(user.attributes.email.substring(0,user.attributes.email.indexOf("@")))
    console.log(user.username)
    console.log(user.attributes.id)
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
      author: user.attributes.email,
    };

    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }
  
  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
<View className="App">
  <Heading level={4} textAlign={"center"}>Advanced Topics Software Engineering</Heading>
<View margin="3rem 0">
<Table><TableBody>{notes.map((note) => (
<TableRow key={note.id || note.name}>
    <TableCell>
    <Text as="strong" fontSize={12} color={'#666699'}>
    {note.author.substring(0,note.author.indexOf("@"))}
    </Text></TableCell><TableCell><Link
 href={note.description}
 color="#007EB9"
 isExternal={true}
>
 {note.name}
</Link>
    </TableCell><TableCell>
    {note.image && (
      <Image
        src={note.image}
        alt={`visual aid for ${notes.name}`}
        style={{ width: 80 }}
      />
    )}</TableCell><TableCell>
<Button variation="link" onClick={() => deleteNote(note)}>
<Text as="strong" fontSize={10} color={'#ff6600'}>Delete</Text>
</Button></TableCell></TableRow>))}
</TableBody></Table>
<hr/>
<p><Text as="strong" color={'#666699'}>More about this:</Text></p>
      <ul>
      <li>You must use your CSN email to verify your sign-in!</li>
      <li>Post your site name and url here.</li>
      <li>Upload an image (yes, it can be a meme!)</li>
      </ul>
<View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Site Name"
            label="What you call your site."
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="URL"
            label="URL with https://"
            labelHidden
            variation="quiet"
            required
          />
          <View
            name="image"
            as="input"
            type="file"
            style={{ alignSelf: "end" }}
          />
          <Button type="submit" variation="primary">
            Create
          </Button>
        </Flex>
      </View>
    </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);