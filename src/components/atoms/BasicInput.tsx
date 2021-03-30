import { Input } from "antd";


import React from "react";


interface inputProps{
 //name : String;
 // className:String;
 placeholder:string
}

function BasicInput (props:inputProps)  {

    return (

    <Input className="inputcss" placeholder={props.placeholder}/> 

    );
  }
  export default BasicInput;