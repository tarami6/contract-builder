import React, { useState } from "react";

const Text = ({ element }) => {
    const [editMode, setEditMode] = useState(false)
    return (
        <div onDoubleClick={() => setEditMode(!editMode)}>
            {editMode ? <p>Edit</p> : <p>Text</p>}
            
        </div>

    )
}

export default Text
