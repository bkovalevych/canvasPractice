import React from 'react';
import styles from './formulaViewer.module.scss'
import styled from 'styled-components'

export default ({children}) => {
    let matches = children.matchAll(/\{.+\}|\w+|\)|\(|\+|-|\/|\*|=/g);
    let tokens = [];
    let stack = [];
    let height_stack = [];
    for (let val of matches) {
        tokens.push(val[0]);
    }
    let index = 0;

    const popStack = () => {
        return stack.splice(stack.length - 1, 1);
    }
    const popHeightStack = () => {
        return height_stack.splice(height_stack.length - 1, 1)[0];
    }

    const passValue = () => {
        return tokens[index++];
    }
    const value = () => {
        return tokens[index];
    }
    const equation = () => {
        expressionSum();
        while(value() === '=') {
            ++index;
            expressionSum();
            let last = popStack();
            let prev = popStack();
            const last_height = popHeightStack()
            const prev_height = popHeightStack()
            linear_prepare(prev, last, prev_height, last_height, '=');
        }
    }
    const expressionSum = () => {
        expressionMultiply();
        while(value() === '-' || value() === '+') {
            let operation = passValue();
            expressionMultiply();
            let last = popStack();
            let prev = popStack();
            const last_height = popHeightStack()
            const prev_height = popHeightStack()
            linear_prepare(prev, last, prev_height, last_height, operation);
        }
    }
    const expressionMultiply = () => {
        number();
        while(value() === '*' || value() === '/') {
            let operation = passValue();
            number();
            const last = popStack();
            const prev = popStack();
            const last_height = popHeightStack()
            const prev_height = popHeightStack()

            if (operation === '/') {
                stack.push(
                    <div className={styles.vertical}>
                        <div>{prev}</div>
                        <div><span style={{width: 0, height: 0, fontSize: 0, position: 'absolute'}}>/</span>
                            {last}</div>
                    </div>)
                height_stack.push(last_height + prev_height + 1)
            } else {
                linear_prepare(prev, last, prev_height, last_height, "*")
            }
        }
    }
    const linear_prepare = (prev, last, prev_height, last_height, symbol) => {
        let prev_val = prev_height >= last_height? 0 : last_height;
        let last_val = last_height >= prev_height? 0 : prev_height;
        let operation_margin = Math.max(prev_height, last_height)
        stack.push(
            <div className={styles.horizontal}>
                <Digit val={prev_val}>{prev}</Digit>
                <Digit val={operation_margin}>{symbol}</Digit>
                <Digit val={last_val}>{last}</Digit>
            </div>)
        height_stack.push(Math.max(last_height, prev_height))
    }
    const number = () => {
        let val = "";
        while (value() === '-') {
            val += value();
        }
        if (value() === '(') {
            ++index;
            expressionSum()
            let last = popStack()
            const last_height = popHeightStack()
            stack.push(<div className={styles.horizontal}>
                <Digit val={last_height / 2}>(</Digit>
                <Digit val={0}>{last}</Digit>
                <Digit val={last_height / 2}>)</Digit>

            </div>);
            height_stack.push(last_height)
            ++index;
        }  else if (/\{.+\}/.test(value())) {

            let valJSON = passValue()
            try {
                let t = JSON.parse(valJSON);
                stack.push(<span style={{color: t.color}}>{t.text}</span>)
            } catch (e) {

            }

        } else if (/\w+/.test(value())) {
            stack.push(<div>{passValue()}</div>)
            height_stack.push(0)
        }
    }

    equation();

    return <div className={styles.horizontal}>{stack}</div>;
}


const Digit = styled.div`
margin-left: 5px;
margin-right: 5px;
margin-top: ${
    ({val}) => val * 10
    }px;
`