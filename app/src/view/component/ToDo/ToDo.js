import React, { useEffect, useState } from 'react'
import './ToDo.css'
import TodoBox from './TodoBox'
function ToDo() {
    const [dataTodo, setDataTodo] = useState([]);
    useEffect(() => {
         fetch('/get/toDo', {
            method: 'POST',
            body: JSON.stringify({ lastName: localStorage.getItem("lastName") }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                 setDataTodo(data);

            })
    }, []);
 
    return (
        <div id='root123'>
            <h2>ToDo</h2>
            <div className="boxtest">
            {
                dataTodo.map((todoTasks, index) => {
                    return (<TodoBox key={index} todoTasks={todoTasks} />)
                })
            }
            </div>
        </div>


         })

      


    },[])
    return (
        <div id='root'>
            <h2>ToDo</h2>
            {/* {todobox} */}

        </div>


    )
    }

export default ToDo;