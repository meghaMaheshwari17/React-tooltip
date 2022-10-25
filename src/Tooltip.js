import React from 'react';
import './Tooltip.css';
function Tooltip (props) {
    // for determining the position
    const position = props.position;
  return (
    <>
    {/* the component will be shown if props.showTooltip is true */}
     {props.showTooltip && <div className={`tooltip-text ${position}`}>
        Thanks for hovering! I am a Tooltip Text
     </div>
     }
     </>
  )
}

export default Tooltip;