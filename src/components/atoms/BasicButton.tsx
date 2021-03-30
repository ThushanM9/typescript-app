import { Button } from "antd";
import { ButtonType } from "antd/es/button";
import React from "react";


interface ButtonProps{
 //className :String
//  type?: ButtonType;
lebal: string;

}

function BasicButton (props:ButtonProps)  {
    debugger
    return (
       <div>
        <Button size="large">{props.lebal}</Button>
        
        </div>
    );
  }
  export default BasicButton;