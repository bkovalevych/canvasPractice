import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default ({text, update}) => {
    const [pos, setPos] = useState(0);
    const size = text.length;
    useEffect(() => {

        return () => {
            setPos(0);
        }
    }, [text])
    return <NormalText>
        <div><Read>{text.substr(0, pos)}</Read>{text.substr(pos)}</div>
        <input type="range"
               value={pos}
               onChange={e => {
                   update(parseInt(e.target.value) - pos)
                   setPos(parseInt(e.target.value))
               }} max={size} step={1}
               style={{width: size * 8.5}}
        /><br/>
        {size === pos? <FontAwesomeIcon icon={faCheckCircle} color="#a1c98c" />  : ""}
    </NormalText>

}

const Read = styled.span`
background: #a1c98c;
padding: 5px 0 5px 0;
color: white;
`
const NormalText = styled.div`
font-size: 20px;
padding: 20px;
textAlign: center;
margin: 20px;
background: rgb(204,203,229)
`;