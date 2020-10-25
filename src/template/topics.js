import React, {useEffect, useRef, useState} from 'react';
//import responseTopics from './json_data';
import styled from 'styled-components';
import Steps from './steps';
import {getTopic, getTopicsLabels} from '../functions/topics'

export default function () {
    const [selectedTopic, setSelectedTopic] = useState(0);
    const [fetch, setFetch] = useState("idle");
    const labels = useRef(null);
    useEffect(() => {
        if (fetch === 'idle') {
            getTopicsLabels().then(topics => {
                labels.current = topics
                setFetch("done")
            })
            setFetch('waiting');
        }
    },[fetch])
    const showTopicContent = () => {
        if (selectedTopic === null) {
            return <NormalText>Выберите тему</NormalText>;
        }
        return <Steps idTopic={selectedTopic}/>;
    }
    const showTopicLabel = () => {
        if (fetch === 'idle' || fetch === 'waiting') {
            return "waiting";
        }
        return labels.current.map((val, index) =>
            <Link key={index} onClick={() => {setSelectedTopic(index)}}>{val.name}</Link>
        )
    }
    return <Parent>
        <Links>{showTopicLabel()}</Links>
        <div>{showTopicContent()}</div>
    </Parent>
}

const NormalText = styled.div`
    font-size: 20sp;
`;
const Link = styled.div`
font-size: 20sp;
cursor: pointer;
color: blue;
`

const Parent = styled.div`
display: grid;
height: 100vh;
grid-template-columns: 1fr 3fr;
`

const Links = styled.div`
background: #a1c98c;
padding: 20px;
`