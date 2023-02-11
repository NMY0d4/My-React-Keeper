import React, { useState } from "react";

function CreateArea({ handleAddNote }) {
    const initialNote = {
        id: "",
        title: "",
        content: "",
    };
    const [note, setNote] = useState(initialNote);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prevNote) => ({ ...prevNote, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (note.title && note.content) {
            handleAddNote(note);
            setNote(initialNote);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input
                    onChange={handleChange}
                    name="title"
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    onChange={handleChange}
                    name="content"
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
