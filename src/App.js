import React,{useState} from 'react';
import './App.css';
import Tooltip from './Tooltip';

function App() {
  const [showTooltip,setShowTooltip]=useState(false); //to show or not to show the tooltip component
  return (
      <div className="tooltip" 
      onMouseOver={()=>{setShowTooltip(true)}}
      onMouseOut={()=>setShowTooltip(false)}
      >Hover over me
        {/* the tooltip component */}
         <Tooltip position="left" showTooltip={showTooltip}/>
      </div>
  );
}

export default App;
