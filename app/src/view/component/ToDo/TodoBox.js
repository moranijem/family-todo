import React from 'react';
import './TodoBox.css'
import ShowTODO from './showTODO'

export default function TodoBox(props) {
    const { todoTasks } = props;
    let todo = todoTasks.todoTasks;
    console.log("MMMM")
    console.log(todoTasks)
    return (

        
            todo.map((todoTasks, index) => {
                return (<ShowTODO key={index} todoTasks={todoTasks} />)
            })
        


    )
}
