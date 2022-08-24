import React from 'react';
import './userinfo.css';
const Usersinfo = (props) => {
    const userinfo = props.userInfo;
    const {first_name,last_name,img,gender,id,email} = userinfo;
    const addToList = props.addToList;
    return (
        <div className='main'>
            <img src={img} alt="" />
            <h2>Name:{" "+ first_name}{" "+last_name}</h2>
            <h4>Id{" "+id}</h4>
            <p>Mail{" "+ email}</p>
            <button onClick={()=>addToList(userinfo)}>Add to list</button>
        </div>
    );
};

export default Usersinfo;
