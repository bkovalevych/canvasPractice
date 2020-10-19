import React, {useState} from 'react';
import responseTopics from './json_data';
import styled from 'styled-components';
import Steps from './steps';

export default function () {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const showTopicContent = () => {
        if (selectedTopic === null) {
            return <NormalText>Выберите тему</NormalText>;
        }
        return <Steps {...responseTopics[selectedTopic]}/>;
    }
    const showTopicLabel = () => {
        return responseTopics.map((val, index) =>
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