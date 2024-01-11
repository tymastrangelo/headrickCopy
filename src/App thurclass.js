import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut, user }) {
  return (
    <View className="App">
      <Card>
      <Heading level={4}>Mr. Headrick Spirit Week!!  Yay!</Heading>
        <h3>{user.username}</h3>
        <Image src={'http://www.clipartbest.com/cliparts/eiM/7py/eiM7pyLdT.gif'} width={240} className="App-logo" alt="logo" /><br/>
        <Image src={logo} width={240} className="App-logo" alt="logo" />
        <img src="https://i.pinimg.com/originals/db/e6/b9/dbe6b90d0fd0d209001cb64eefd038d7.gif" width="360" />
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);