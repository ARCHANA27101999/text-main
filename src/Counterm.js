import React, { memo } from "react";


function Counterm() {
    console.log("child component");
    
  
    return (
      <div >
       child component
       
      </div>
    );
  }
  
  export default memo( Counterm);