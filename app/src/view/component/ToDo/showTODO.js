import React from 'react';
import './TodoBox.css'

export default function ShowTODO(props) {
    const { todoTasks } = props;
    console.log("test");
    console.log(todoTasks)
    return(
    <div className="MainBoxTodo">
        <div className="TodoBoxShow">
            <div>
                {/* assa */}
                <h1>{todoTasks.user.firstName}</h1>
                <p> {todoTasks.taskTitle}</p>
            </div>
            <div>  <img className="imgTodo" src={todoTasks.user.imgUrl}></img>
            </div>

            <form>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label > Done</label><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
    )
}