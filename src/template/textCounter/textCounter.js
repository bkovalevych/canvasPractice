import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({text, update, isPreview, isDone, updateStep, idStep, idTopic}) => {
    const [pos, setPos] = useState(isDone? text.length: 0);
    const size = text.length;

    useEffect(() => {
        if (!isDone)
            setPos(0)
        else {
            setPos(text.length);
        }
        return () => {

                setPos(0);
        }
    }, [text])
    return <NormalText>
        <div style={{overflowWrap: "break-word"}}><Read>{text.substr(0, pos)}</Read>{text.substr(pos)}</div>
        <input type="range"
               value={pos}
               disabled={isDone}
               onChange={e => {
                   const newValue = parseInt(e.target.value);
                   if (newValue === size) {
                       const points = isPreview? 0: 1;
                       updateStep( {idTopic: idTopic, idStep: idStep, step: {gainedPoints: points, isDone: true}});
                   }
                   update(parseInt(e.target.value) - pos)
                   setPos(newValue)
               }} max={size} step={1}
               style={{width: "90%"}}
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
background: rgb(204,203,229);
overflow-wrap: break-word;
width: 90%;
margin-left: 5%;
`;