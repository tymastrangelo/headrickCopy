import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Nav, UIEditNote } from "./ui-components";
import { API, Storage } from "aws-amplify";
import "./App.css";
import { getNote } from "./graphql/queries";
function EditNote() {
  return <Put />;
}

function Put() {
  const { cid } = useParams();
  const [cr, setMe] = useState({});
useEffect(() => {
    const queryData = async () => {
      const record = cid
        ? (
            await API.graphql({
              query: getNote.replaceAll("__typename", ""),
              variables: { id: cid },
            })
          )?.data?.getNote
        : cr;
        if (record.image) {
          record.filename = record.image
          const url = await Storage.get(record.image);
          record.image = url;
          }
        setMe(record);
    };
    queryData();
  }, [cid, cr]);



  return (
    <div>
      <header className="App-header">
        <Nav />
        <UIEditNote nx={cr} />
      </header>
    </div>
  );
}

export default EditNote;
