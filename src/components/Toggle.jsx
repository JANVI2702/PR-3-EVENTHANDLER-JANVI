import React from 'react';

function Toggle({ isDarkMode, onToggle }) {
    return (
        <button
            onClick={onToggle}
            className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}

export default Toggle;