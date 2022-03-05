import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'

export default function Todos() {
    const [users, setUsers] = useState([])
    const [selectedUserId, setSelectedUserId] = useState(null)
    const [todos, setTodos] = useState([])
    const [loadingTodos, setLoadingTodos] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log(res.data)
            setUsers(res.data)

        }).catch((err) => {

        })
    }, [])

    useEffect(() => {
        if (selectedUserId != null) {
            setLoadingTodos(true)

            axios.get(`https://jsonplaceholder.typicode.com/users/${selectedUserId}/todos`).then((res) => {
                console.log(res.data)
                setTodos(res.data)
                setLoadingTodos(false)

            }).catch((err) => {

            })
        }

    }, [selectedUserId])

    return (
        <div>
            <ul>
                {users.map(user => {
                    return (
                        <li key={user.id} onClick={() => {
                            setSelectedUserId(user.id)
                        }}>{user.name}</li>
                    )
                })}
            </ul>
            {loadingTodos ? <Loader /> : selectedUserId && <ul>
                {todos.map(todo => {
                    return (<li key={todo.id}>{todo.title}</li>)
                })}
            </ul>}
        </div>
    )
}
