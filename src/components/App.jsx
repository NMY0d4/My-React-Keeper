import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

const App = () => {
    const initialNote = {
        key: "",
        title: "",
        content: "",
    };
    const initialNotesArr = [];

    const [notesArr, setNotesArr] = useState(initialNotesArr);

    const [note, setNote] = useState(initialNote);

    const handleAddNote = (e) => {
        const { name, value } = e.target;
        setNote((prevNote) => ({ ...prevNote, [name]: value }));
        setNotesArr((prevNotesArr) => [...prevNotesArr, note]);
    };

    return (
        <div>
            <Header />
            <CreateArea handleAddNote={handleAddNote} note={note} />
            {notesArr.map((note) => (
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            ))}
            <Footer />
        </div>
    );
};

export default App;
