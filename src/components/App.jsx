import React from "react";
import { notes } from "../notes";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

const App = () => {
    return (
        <div>
            <Header />
            <CreateArea />
            {notes.map((note) => (
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
