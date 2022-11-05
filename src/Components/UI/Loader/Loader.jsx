import React from 'react';
import styled from "styled-components";
import {keyframes} from "styled-components";

const Loader = () => {
    const rotation = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    `
    const Loader = styled.div`
      height: 60px;
      width: 60px;
      position: absolute;
      top:50%;
      left:50%;
      margin: -(30px) 0 0 -(30px);
      border:6px solid rgba(0,0,0,.2);
      border-radius:100%;
      -webkit-animation: ${rotation} 1s infinite linear;
      -moz-animation: ${rotation} 1s infinite linear;
      -o-animation: ${rotation} 1s infinite linear;
      animation: ${rotation} 1s infinite linear;

      &:before {
        content:"";
        display:block;
        position:absolute;
        left:-6px;
        top:-6px;
        height:100%;
        width:100%;
        border-top:6px solid rgba(0,0,0,.8);
        border-left:6px solid transparent;
        border-bottom:6px solid transparent;
        border-right:6px solid transparent;
        border-radius:100%;
      }
    `
    return (
        <Loader/>
    );
};

export default Loader;