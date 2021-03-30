import { Button, Input } from "antd";
import InputFeild from '../molecules/inputFeild'

import React from "react";
import BasicButton from "../atoms/BasicButton"

// interface inputProps{
//  name : String;
//  // className:String;

// }
import { Typography } from 'antd';
const { Title } = Typography;

function YardLevelDefinitionFrom ()  {
    return (
    <div>
        <InputFeild title="Level Code"  placeholder="insert level code"/>
        <InputFeild title="Level Name"  placeholder="insert level Name"/>
        <InputFeild title="Level Desription"  placeholder="insert level Desription"/>
        <InputFeild title="Level Sequence"  placeholder="insert level Sequence"/>
        <BasicButton  lebal="CLEAR"/>
        <BasicButton lebal="SAVE"/>
    </div>
        

    );
  }
  export default YardLevelDefinitionFrom;