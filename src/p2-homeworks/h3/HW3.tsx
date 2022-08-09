import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type OneUserType = {
    _id: string,
    name: string
}
export type UserType = OneUserType[]

// уровень работы с глобальными данными
function HW3() {
const [users, setUsers] = useState<UserType>([]) // need to fix any

    const addUserCallback = (name: string) => {
        let newUser: OneUserType = {_id: v1(), name: name}
        let NewTasks = [...users, newUser]
        setUsers(NewTasks)
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
