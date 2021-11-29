import React from "react";

/* ------------------------------- components ------------------------------- */
import Header from "./components/Header";
import List from "./components/List"
import Footer from "./components/Footer"
import notes from "./notes";

function App() {
  return (
    <>
     <Header />
     {notes.map(note => <List key={note.Key } title={note.title} content={note.content} /> )}
     <Footer />
    </>
  );
}

export default App;
