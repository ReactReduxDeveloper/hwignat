import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        if (name.trim() !== "") {
            addUserCallback(name)
            alert(`Hello ${name}`)
            setName("")
        } else {
            setError(true)
        }
        setName("")
    }
    const OnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(false)
        if (e.key === "Enter") {
            addUserCallback(name)
            setName("")
        }
    }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            OnKeyPressHandler={OnKeyPressHandler}
            users={users}
        />
    )
}

export default GreetingContainer
