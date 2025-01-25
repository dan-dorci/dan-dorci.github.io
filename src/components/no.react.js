import React, { useState } from 'react';

const caughtWords = ['so you hate me :(',
    "😭",
    'no way you have time for this...',
    "shouldn't you be practicing to be a doctor or something...",
    'wowwwww...',
    'just click yes already...',
    'you are so mean :(',
    'I am getting bored...',
    'I am going to sleep...',
    'zzzz', 'zzzzz', 'zzzzzz', 'zzzzzzz', 'zzzzzzzz', 'zzzzzzzzz', "ok I'm awake",
    "let's start over ig..."];

const NoButton = () => {
    const [position, setPosition] = useState({ top: "45%", left: "60%" });
    const [caughtWordIndex, setCaughtWordIndex] = useState(0);
    const [startingText, setStartingText] = useState('No');
    const [buttonText, setButtonText] = useState(startingText);

    const moveButton = () => {
        setTimeout(() => {
            const randomX = Math.random() * 90;
            const randomY = Math.random() * 90;
            setPosition({ top: `${randomY}%`, left: `${randomX}%` });
        }, 75);

    };
    const clickHandler = () => {
        setButtonText(caughtWords[caughtWordIndex]);

        setTimeout(() => {
            setStartingText((prevText) => {
                const newText = prevText + '.';
                setButtonText(newText);
                return newText;
            });
        }, 2000);
        setCaughtWordIndex((caughtWordIndex + 1) % caughtWords.length);
    };
    return (

            <button onMouseEnter={moveButton}
                onClick={clickHandler}
                style={{
                    ...styles.button,
                    top: position.top,
                    left: position.left,
                    position: "absolute",
                }}>
                {buttonText}
            </button>

    );
};

export default NoButton;

const styles = {
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: 'rgb(231, 143, 142)',
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        transition: "all 0.3s ease", // Smooth transition when the button moves
        zIndex: 1,
    },
};
