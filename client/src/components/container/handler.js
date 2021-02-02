import React from 'react';
import axios from 'axios';

const Handler = (props) => {
    const list = props.list;
    let data = "Not-Done";
    let info = true;

    const done = (id,half) => {
        axios.put(`http://localhost:3001/data`, {id, done: !half});
        data = "Done";
    }

    const clear = (id) => {
        axios.delete(`http://localhost:3001/data`, {_id:id})
        console.log("Deleted")
    }
    
    return (
        <div className="item">
            <span onClick={ () => done(list._id, list.done) }>
                {list.done ? "Done" : data }
            </span>
            <div className='title'>
                { list.subject }
            </div>
            <div className="joint">
                <div className="btn">
                    <div className="green">Edit</div>
                    <div onClick={ () => clear(list._id) } className="red">Delete</div>
                </div>
                <div className="stamp">
                    Date: {list.date}...
                    Time: {list.time}
                </div>
            </div>
        </div>
    )
}

export default Handler;