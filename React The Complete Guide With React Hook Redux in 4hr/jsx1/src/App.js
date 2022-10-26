import React from 'react'
import './Custom.css'

function App() {

  //Background-color -> backgroundColor, border-color -> borderColor
  //Value need to add single quote
  //Semi colon --> comma
  return (
    <div style={{padding: '70px 0', backgroundColor: 'blue'}}>
      <div className="innerdiv">
        This is a green box
      </div>
    </div>
  );
}

export default App;
