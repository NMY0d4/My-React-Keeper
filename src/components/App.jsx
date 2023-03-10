import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

const App = () => {
    const initialNotesArr = [];

    const [notesArr, setNotesArr] = useState(initialNotesArr);

    const handleAddNote = (newNote) => {
        newNote.id = uuidv4();
        setNotesArr((prevNotesArr) => [...prevNotesArr, newNote]);
    };

    const deleteNote = (id) => {
        setNotesArr((prevNotesArr) => {
            return prevNotesArr.filter((note) => {
                return note.id !== id;
            });
        });
    };

    return (
        <div>
            <Header />
            <CreateArea handleAddNote={handleAddNote} />
            {notesArr.map((note) => (
                <Note key={note.id} note={note} deleteNote={deleteNote} />
            ))}
            <Footer />
        </div>
    );
};

export default App;
