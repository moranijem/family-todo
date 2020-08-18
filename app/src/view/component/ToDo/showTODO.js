import React from 'react';
import './TodoBox.css'

export default function ShowTODO(props) {
    const { todoTasks } = props;
    console.log("test");
    console.log(todoTasks)
    return (
        <div className="MainBoxTodo">
            <div className="TodoBoxShow">
                <div>
                    {/* assa */}
                    <div className="head">  <img className="imgTodo" src={todoTasks.user.imgUrl}></img>
                        <h1>{todoTasks.user.firstName}</h1>
                    </div>

                </div>
                <div className="flex">
                    <p> {todoTasks.taskTitle}</p>
                   
                        
                        <button id="show">Show details</button>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label id="done" > Done</label>
                        <input type="submit" value="Submit" id="submit" />
                    
                   
                </div>
            </div>
        </div>
    )
}