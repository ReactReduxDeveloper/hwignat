import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    OnKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    users: UserType
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, OnKeyPressHandler, users} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={OnKeyPressHandler} onBlur={setNameCallback}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div className={error ? s.errorButton : ""}> {error ? <span>Input is Empty!</span> : ""}</div>
        </div>
    )
}

export default Greeting
