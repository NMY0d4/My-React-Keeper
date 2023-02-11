import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import Zoom from "@mui/material/Zoom";

function CreateArea({ handleAddNote }) {
    const [isFocus, setIsFocus] = useState(false);

    const expand = () => {
        setIsFocus(true);
    };

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
            <form className="create-note">
                {isFocus && (
                    <input
                        onChange={handleChange}
                        name="title"
                        value={note.title}
                        placeholder="Title"
                    />
                )}
                <textarea
                    onChange={handleChange}
                    name="content"
                    onFocus={expand}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isFocus ? 3 : 1}
                />
                <Zoom in={isFocus}>
                    <Fab>
                        <AddIcon onClick={onSubmitHandler} />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
