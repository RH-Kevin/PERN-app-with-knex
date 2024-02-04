import React, {Fragment, useEffect, useState} from "react";


const link = "";


const ListTodos = () => {

    const [todos, setTodos] = useState([]);




    // Get Todos
    const getTodos = async () => {
        try {
            const response = await fetch(`${link}`);
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTodos();
    },[]);


    // Delete Todos







    return (
        <Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/*
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    */}
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )

}

export default ListTodos;