import React, { useEffect, useState } from 'react'

const UserExpense = () => {

    const [amount, setAmount] = useState();
    const [desciption, setDescription] = useState();
    const [category, setCategory] = useState('Food');
    const [firebaseData, setFirebaseData] = useState([]);

    const amountHandler = (e) => {
        setAmount(e.target.value);
    };

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    };

    const categoryHandler = (e) => {
        setCategory(e.target.value);
    };

    const userData = {
        amount: amount,
        description: desciption,
        category: category
    };

    const sendDataHandler = (e) => {
        postData();
    };

    const postData = async () => {
        const resp = await fetch('https://expensetracker-68061-default-rtdb.firebaseio.com/Users-Expenses.json',{
            method: "POST",
            body: JSON.stringify({userData}),
            headers: {
                "Content-type" : "application/json"
            },
        })
    };

    useEffect(() => {
        getData();
    });

    const getData = async () => {
        const resp = await fetch("https://expensetracker-68061-default-rtdb.firebaseio.com/Users-Expenses.json");
        const data = await resp.json();

        let arr = [];
        for (let key in data) {
            arr.push({
                amount: data[key].userData.amount,
                description: data[key].userData.desciption,
                category: data[key].userData.category,
            })
        }
        setFirebaseData(arr);
        console.log(arr);
    };
    console.log(firebaseData);

    const content = firebaseData.map((ele) => {
        console.log(firebaseData);

        return <div className="flex gap-10 bg-red-500 p-5 text-white">
            <div>{ele.amount}</div>
            <div>{ele.desciption}</div>
            <div>{ele.category}</div>

        </div>
    })

  return (
    <div>
        <div>
            <input onChange={amountHandler} className='p-4 text-white' type='text' placeholder='Amount' />
        </div>
        <div>
            <input onChange={descriptionHandler} className='p-4 text-white' type='text' placeholder='Description' />
        </div>
        <select onChange={categoryHandler} className='p-4 text-2xl w-[11.4rem]' name="" id="">
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Salary">Salary</option>
        </select>
        <div>
            <button onClick={sendDataHandler} className="text-black border p-4 bg-green-500 font-serif font-bold rounded-xl">
                Add Expense
            </button>
        </div>
        {content}
    </div>
  )
}

export default UserExpense