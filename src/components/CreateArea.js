import React from "react";

function CreateArea({ handleAddNote, note }) {
    return (
        <div>
            <form>
                <input name="title" value={note.title} placeholder="Title" />
                <textarea
                    name="content"
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={() => handleAddNote()}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
