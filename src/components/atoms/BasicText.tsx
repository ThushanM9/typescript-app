
import React from "react";

import { Typography } from 'antd';

const { Title } = Typography;


interface textProps{
title:string
  
  }
  


  function BasicText(props:textProps){
      
      return (
          <div>
        <Title level={3}>{props.title}</Title>
        </div>
      );
    }
    export default BasicText;

