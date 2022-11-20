import React, { memo } from "react";


function Counterm() {
    console.log("child component");
    
  
    return (
      <div >
       child component
       <h1>hvh</h1>



.
       
      </div>
    );
  }
  
  export default memo( Counterm);