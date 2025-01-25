import './App.css';
import React, { useState } from 'react';
import YesButton from './components/yes.react';
import NoButton from './components/no.react';

function App() {

  const [completed, setCompleted] = useState(false);

  return (
    <div className="App">
      {!completed ?
        <>
          <div style={styles.container}>
            <div style={
              {
                marginTop: "4%",
                fontSize: "4em",
                fontFamily: 'Pacifico, sans-serif'
              }}>Will You Be My Valentine?</div>
            <YesButton setCompleted={setCompleted} />
            <NoButton />
          </div>
          <iframe src={"https://giphy.com/embed/l0ExnyigWlqCYzOhO"}
            style={
              {
                position: "absolute",
                border: "none",
                left: "0",
                top: "80%",
              }
            }></iframe>
          <iframe src="https://giphy.com/embed/8QbwUh40Hl96yMgvOx"
            style={
              {
                position: "absolute",
                border: "none",
                left: "80%",
                top: "5%",
              }
            }></iframe>
          <iframe src="https://giphy.com/embed/MDJ9IbxxvDUQM"
            style={
              {
                position: "absolute",
                border: "none",
                left: "0",
                top: "25%",
              }}></iframe>

          <iframe src="https://giphy.com/embed/Fu3OjBQiCs3s0ZuLY3"
            style={
              {
                position: "absolute",
                border: "none",
                left: "50%",
                top: "70%",
              }}></iframe>
          <iframe src="https://giphy.com/embed/Z89FWNJ5xcNNpCwbQT"
            style={
              {
                position: "absolute",
                border: "none",
                left: "80%",
                top: "60%",
              }}></iframe>

        </> :
        <div style={styles.completedContainer}>
          <iframe src="https://giphy.com/embed/uWlpPGquhGZNFzY90z"
            style={
              {
                position: "absolute",
                border: "none",
                right: "20%",
                top: "10%",
              }}></iframe>
            <div style={
              {
                marginTop: "20%",
                fontSize: "4em",
                fontFamily: 'Pacifico, sans-serif'
              }}>YAYYY!!!!</div>
          <div style={
              {
                marginTop: "5%",
                fontSize: "1.5em",
                fontFamily: 'Pacifico, sans-serif'
              }}>{'5:45 pm West Village 😉'}</div>
          <iframe src="https://giphy.com/embed/QLtO7Hs5FXtJe"
            style={
              {
                position: "absolute",
                border: "none",
                left: "20%",
                top: "10%",
              }}></iframe>
          <div style={
              {
                position: "absolute",
                bottom: "2%",
                left: "2%",
                fontSize: "1em",
              }}>{"Sorry in advance all the really cool places were taken :( even tho I tried to reserve like a month before hand..."}</div>
        </div>
      }

    </div>
  );
}

export default App;

const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "rgba(255, 230, 232, .50)",
  },
  completedContainer: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "rgba(255, 230, 232, .50)",
  },
};