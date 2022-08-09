import React from 'react'
import {OneAffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: OneAffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div  className={s.Display}>
            <div className={s.TextColor}>{props.affair.name}</div>

            <div className={`${s[props.affair.priority]}`}>[{props.affair.priority}]</div>

            <button onClick={deleteCallback} className={s.DeleteButton}>X</button>
        </div>
    )
}

export default Affair
