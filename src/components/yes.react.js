import React, { useEffect, useState } from 'react';
import '../App.css';
import ReactGA from 'react-ga';

const words = ['Yes', '🤭', '<3', 'pssss....', 'YAS', 'over here :)', 'Pick me!', 'PLEASE', 'YESSSSS', 'is it really that hard 🤨'
];

const YesButton = ({setCompleted}) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [buttonText, setButtonText] = useState(words[wordIndex]);
    const [buttonSize, setButtonSize] = useState(100); // Button size in percentage
    const [removeButton, setRemoveButton] = useState(false);
    
    useEffect(() => {
        const intervalIdOne = setInterval(() => {
            setWordIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % words.length;
                setButtonText(words[newIndex]);
                return newIndex;
            });
        }, 3000);
        const intervalIdTwo = setInterval(() => {
            setButtonSize((prevSize) => prevSize + 10); // Increase size by 10%
        }, 3000);
        return () => { clearInterval(intervalIdOne); clearInterval(intervalIdTwo); };
    }, []);

    const clickHandler = (e) => {

        ReactGA.event({
            category: 'User',
            action: 'click',
            label: 'Yes',
          });

          
        setRemoveButton(true);
        const button = e.target;
        const numEmojis = 200;
        
        const rect = button.getBoundingClientRect(); // Get button's position
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;
    
        for (let i = 0; i < numEmojis; i++) {
          // Create emoji element
          const emoji = document.createElement("div");
          emoji.className = "emoji";
          emoji.innerText = "🤗"; // You can add any emoji here
    
          // Randomize the burst direction (angle)
          const angle = Math.random() * 2 * Math.PI; // Random angle in radians
          const distance = Math.random() * 400 + 100; // Random distance from the center
    
          // Calculate position of each emoji based on angle and distance
          const startX = buttonCenterX + distance * Math.cos(angle);
          const startY = buttonCenterY + distance * Math.sin(angle);
    
          // Set initial position of the emoji
          emoji.style.left = `${startX}px`;
          emoji.style.top = `${startY}px`;
    
          // Append emoji to body
          document.body.appendChild(emoji);
    
          // Animate the emoji to move outward and fade out
          setTimeout(() => {
            emoji.style.animation = "burst 2s ease-out forwards";
          }, 500);
    
          // Remove the emoji after animation
          setTimeout(() => {
            emoji.remove();
            setCompleted(true);
          }, 500);
        }
    };
    return (
        !removeButton &&
        <button
            onClick={clickHandler}
            style={{
                ...styles.button,
                position: "absolute",
                transform: `scale(${buttonSize / 100})`,
            }}>
            {buttonText}
        </button>
    );
};

export default YesButton;

const styles = {
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: 'rgb(172, 216, 170)',
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        top: '45%',
        left: '40%',
        transition: "all 0.3s ease", // Smooth transition when the button moves
        zIndex: 2,
    },
};
