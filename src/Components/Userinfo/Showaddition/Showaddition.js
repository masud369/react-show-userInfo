import React from 'react';
import './showadditon.css';

const Showaddition = (props) => {
    const user = props.user;
    console.log(user);
    const totalIncome = user.reduce((total,userData)=>total+userData.yearly_income,0)
    return (
        <div className='showaddition-c'>
             <h2>Total users:{" "+ user.length}</h2>
             <h3>Total users income is:{" $"+totalIncome}</h3>   
        </div>
    );
};

export default Showaddition;