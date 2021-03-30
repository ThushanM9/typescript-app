import BasicInput from "..//atoms/BasicInput"
import BasicText from "..//atoms/BasicText"
import React from "react";


interface inputFeildProps{
title:string;
placeholder:string;

}


function InputFeild(props:inputFeildProps) {
    return (
    <div>  
      <BasicText title={props.title}/>
      <BasicInput  placeholder={props.placeholder}/> <br/>

    </div>
  
  
    );
  }
  export default InputFeild;