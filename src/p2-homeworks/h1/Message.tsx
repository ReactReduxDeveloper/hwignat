import React from 'react'
import {messageDataType} from "./HW1";
import s from './Message.module.css'

function Message(props: messageDataType) {
    debugger
    return (
        <div className={s.message}>
            <div className={s.imgsize}>
                <img src={props.avatar}/>
            </div>
            <div className={s.Blockformessage}>
                <div className={s.nameColor}>{props.name}<br/></div>
                <div className={s.messageColor}>
                    {props.message}
                </div>
                <div className={s.Timecolor}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
