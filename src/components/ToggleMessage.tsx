// ToggleMessage.tsx - A component that toggles the visibility of a message.
import React, { useState } from 'react';

const ToggleMessage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide Message' : 'Show Message'}
            </button>
            {isVisible && <p>This is a toggleable message.</p>}
        </div>
    );
};

export default ToggleMessage;
