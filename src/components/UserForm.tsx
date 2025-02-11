// UserForm.tsx - A simple form component to handle user input.
import React, { useState } from 'react';

const UserForm: React.FC = () => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Hello, ${name}!`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
