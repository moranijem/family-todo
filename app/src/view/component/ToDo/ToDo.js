import React ,{useEffect, useState}from 'react'
import './ToDo.css'
import { useHistory } from 'react-router-dom';

function ToDo() {
    let history = useHistory();
    const [todolist,setTodolist]=useState([]);
    // const {todobox}=props;
    useEffect(()=>{

        let lastname=localStorage.getItem("lastName");
        fetch('/get/toDo', {
          method: 'POST',
         body: JSON.stringify({ lastname }),
         headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            // setTodolist([...todolist,{firstName: }]);
            
              history.push('/Login');


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