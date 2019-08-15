import React from 'react';
import img1 from './images/img1.png';
import './App.css';

function App() {
  return (
    <div className={"main"}>
      <div className={"content-container"}>
        <div className={"content"}>
          <img className={"img1"} src={img1} />
        </div>
        {/* <img className={"img2"} src={img2} /> */}
      </div>
    </div>
  );
}

export default App;
