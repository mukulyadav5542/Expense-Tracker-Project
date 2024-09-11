import React, { useState } from 'react'

const UserExpense = () => {

    const [amount, setAmount] = useState();
    const [desciption, setDescription] = useState();
    const [category, setCategory] = useState();

    const amountHandler = (e) => {

    };

    const descriptionHandler = (e) => {
        
    };

    const categoryHandler = (e) => {
        
    };

  return (
    <div>
        <div>
            <input onChange={amountHandler} className='p-4' type='text' placeholder='Amount' />
        </div>
        <div>
            <input onChange={descriptionHandler} className='p-4' type='text' placeholder='Description' />
        </div>
        <select onChange={categoryHandler} className='p-4 text-2xl w-[11.4rem]' name="" id="">
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Salary">Salary</option>
        </select>
        <div>
            <button className="text-black border p-4 bg-green-500 font-serif font-bold rounded-xl">
                Add Expense
            </button>
        </div>
    </div>
  )
}

export default UserExpense