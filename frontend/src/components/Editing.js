import React, { useState } from 'react';

function Editing({ show, onClose }) {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState(null);

    // Event handler for changing the name input
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Event handler for changing the avatar file
    const handleAvatarChange = (event) => {
        setAvatar(event.target.files[0]);
    };

    // Event handler for form submission 
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>

                <label>
                    Avatar:
                    <input type="file" onChange={handleAvatarChange} />
                </label>

                <button type="submit">Save</button>
            </form>

            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default Editing;
