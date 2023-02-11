import React from "react";

const Note = ({ note, deleteNote }) => {
    const { id, title, content } = note;
    const handleClick = () => {
        deleteNote(id);
    };

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
};

export default Note;
