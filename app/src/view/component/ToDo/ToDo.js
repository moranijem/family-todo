import React from 'react'
import './ToDo.css'
function ToDo() {
    return (
        <div id='root'>
            <h2>ToDo</h2>

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