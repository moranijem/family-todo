import React from 'react';
import './TodoBox.css'
import ShowTODO from './showTODO'

export default function TodoBox(props) {
    const todoTasks = props;
    let todo = todoTasks.todoTasks;
    console.log("MMMM")
    console.log(todo._id)
    return (
        <div>
            <h1>{todoTasks._id}</h1>
            {
                todo.todoTasks.map((todoTasksElem, index) => {
                    console.log(todoTasksElem);
                    return (
                        <div>

                            <div className="flex">
                                <p> {todoTasksElem.taskTitle}</p>
                                <button id="show">Show details</button>
                                <form onSubmit={changeDone}>
                                    {checkboxStatus(todoTasksElem.done)}
                                    <label id="done" > Done</label>
                                    <input type="submit" value="Submit" id={todoTasksElem._id + 'SubmitButton'} className="submitButt" />
                                </form>

                            </div>



                            {/* <ShowTODO key={index} todoTasks={todoTasksElem} /> */}
                        </div>
                    )

                })
            }
        </div>
    )


    function changeDone(e) {
        e.preventDefault();
        console.log("123")
        console.log(e.target.checkbox.checked);



    }

    function checkboxStatus(status) {
        console.log("status", status)
        let htmlcheckBox = "";
        if (status) {
            htmlcheckBox = <input type="checkbox" id="checkbox" name="checkbox" checked />;        }
        else {
            htmlcheckBox = <input type="checkbox" id="checkbox" name="checkbox"  />;        }
        return (
            htmlcheckBox
        )

    }
}
