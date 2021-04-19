import React from "react";
import Form from "../components/Form.js";
import Notes from "../components/Notes.js";

const notes = [
  {id: 1, text: "My Note"},
  {id: 2, text: "My Note"},
  {id: 3, text: "My Note"}
];

const Home = () => {
  return (
    <>
    <Form />
    <hr className="my-4" />
    <Notes notes = {notes}/>
    </>
  )
}

export default Home;