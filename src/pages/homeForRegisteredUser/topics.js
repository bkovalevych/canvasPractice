import React, {useCallback, useEffect, useRef, useState} from 'react';

import Steps from '../steps';
import {getTopicsLabels} from '../../functions/topics'
import style from "./topics.module.scss"

export const Topics = ({topics, getTopics, updateTopic}) => {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [fetch, setFetch] = useState("idle");
    const [labels, setLabels] = useState([]);
    const sidePanel = useRef();
    const rightSidePanel = useRef();
    const content = useRef();

    const updateSetLabels = useCallback(() => {
        setLabels(topics.topics);
    }, [topics])

    const nextTopic = () => {
        if (labels && selectedTopic + 1 < labels.length) {
            setSelectedTopic(val => val + 1);
            return true;
        }
        return false;
    }
    useEffect(() => {
        if (fetch === 'idle') {
            getTopics();
            setFetch('waiting');
        }
    },[fetch])
    useEffect(() => {
        if (fetch === "waiting") {
            setFetch("done");
            updateSetLabels();
        }
    }, [topics])

    const showTopicContent = () => {
        if (selectedTopic === null) {
            return <div className={style.normalText}>Тема не обрана</div>;
        }
        return <Steps idTopic={selectedTopic} nextTopic={nextTopic}/>;
    }
    const showTopicLabel = () => {
        if (fetch === 'idle' || fetch === 'waiting') {
            return "waiting";
        }
        return labels.map((val, index) =>
            <div key={index}
               className={index === selectedTopic? style.selectedTopic: style.normalTopic}
                 onClick={() => {
                     setSelectedTopic(index)
                  }}>{val.name} <span>{val.gainedPoints}/{val.points}</span></div>
        )
    }
    return <div className={style.parent}>
        <div className={style.sidepanelParent}>
            <button className={style.openbtn} onClick={(e) => {
                e.target.parentNode.parentNode.style.gridTemplateColumns = "300px 10fr 100px"
                sidePanel.current.style.display = 'block';
                e.target.style.display = "none"
            }}>&#9776; Теми</button>
            <div ref={sidePanel} className={style.sidepanel}>
                <div
                   className={style.closebtn}
                   onClick={(e) => {
                       e.target.parentNode.parentNode.parentNode.style.gridTemplateColumns = "100px 10fr 100px"
                       sidePanel.current.style.display = 'none';
                       e.target.parentNode.parentNode.children[0].style.display = "block"
                   }}>
                    &#9776; Теми
                </div>
                {showTopicLabel()}
            </div>
        </div>
        <div className={style.content} ref={content}>{showTopicContent()}</div>
        <div ref={rightSidePanel} className={style.rightSidePanel} />
    </div>
}