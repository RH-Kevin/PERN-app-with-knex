import React, {Fragment, useState} from "react";

const link = "https://pern-app-with-knex.onrender.com";

const InputTodo = () => {

    const [description, setDescription] = useState();

    const onSubmitFrom = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`${link}/todos`, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">My Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitFrom}>
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                <button className="btn btn-success">Add to List</button>
            </form>
        </Fragment>
    )



}

export default InputTodo;