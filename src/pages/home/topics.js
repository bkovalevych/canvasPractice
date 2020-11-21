import React, {useEffect, useRef, useState} from 'react';

import Steps from '../steps';
import {getTopicsLabels} from '../../functions/topics'
import style from "./topics.scss"

export const Topics = () => {
    const [selectedTopic, setSelectedTopic] = useState(0);
    const [fetch, setFetch] = useState("idle");
    const labels = useRef(null);
    const sidePanel = useRef();
    const content = useRef();
    const nextTopic = () => {
        if (labels && selectedTopic < labels.current.length) {
            setSelectedTopic(val => val + 1);
        }
    }
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
            return <div className="normalText">Тема не обрана</div>;
        }
        return <Steps idTopic={selectedTopic} nextTopic={nextTopic}/>;
    }
    const showTopicLabel = () => {
        if (fetch === 'idle' || fetch === 'waiting') {
            return "waiting";
        }
        return labels.current.map((val, index) =>
            <div key={index}
               className={index === selectedTopic? "selectedTopic": "normalTopic"}
                  onClick={() => {
                setSelectedTopic(index)
            }}>{val.name}</div>
        )
    }
    return <div className="parent">
        <div className="sidepanelParent">
            <button className="openbtn" onClick={() => {
                sidePanel.current.style.width= "22%";
                sidePanel.current.parentNode.style.width = "22%";
                content.current.style.width = "70%";
            }}>&#9776; Теми</button>
            <div ref={sidePanel} className="sidepanel">
                <div
                   className="closebtn"
                   onClick={() => {
                       sidePanel.current.style.width = 0;
                       sidePanel.current.parentNode.style.width = "8%";
                       content.current.style.width = "90%";
                   }}>
                    &#9776; Теми
                </div>
                {showTopicLabel()}
            </div>
        </div>
        <div className="content" ref={content}>{showTopicContent()}</div>
    </div>
}