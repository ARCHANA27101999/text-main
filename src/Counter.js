import React, { memo } from "react";


function Counter(props) {
    const ref=React.useRef(0)
    console.log(ref.current++);
   
  
    return (
      <div >
        <button onClick={props.increment}>add</button>
        <button>added</button>
       
      </div>
    );
  }
  
  export default memo( Counter);