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
                //  console.log(data)
            })
    }, []);

    return (
        <div id='root123'>
            <h2>ToDo</h2>
            <div className="boxtest">
                {
                    dataTodo.map((todoTasks, index) => {
                        
                        return (
                                <div className="TodoBoxShow">
                                    <div>
                                        <div className="head">  <img className="imgTodo" src={todoTasks.todoTasks[0].user.imgUrl}></img>
                                            <h1>{todoTasks.todoTasks[0].user.firstName}</h1>
                                        </div>
                                    </div>
                                    <TodoBox key={index} todoTasks={todoTasks} />
                                </div>
                        )
                    })
                }
            </div>
        </div>

    )

    //  function todolist(e) {

    //     e.preventDefault();
    //     localStorage

    //      const { username, UserLName, Useremail, img, Password } = e.target.elements.value;
    //      fetch('/Register', {
    //        method: 'POST',
    //       body: JSON.stringify({ username, UserLName, Useremail, img, Password }),
    //       headers: {
    //          'Content-Type': 'application/json'
    //        }
    //      })
    //        .then(res => res.json())
    //        .then(data => {

    //          if (data[0].success) {
    //            history.push('/Login');

    //          }

    //       })

    //    }
}
export default ToDo;