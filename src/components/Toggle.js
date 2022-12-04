import React from "react";
import { useState } from "react";


function Toggle() {
  let [isOn, setIsOn] = useState(false);
  function handleclick (){
setIsOn((isOn) => !isOn);
  }
  const color = isOn? "red" : "white";
  return <button style={{ background: color }} onClick={handleclick}> { isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
