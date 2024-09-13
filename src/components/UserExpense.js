import React, { useEffect, useState } from "react";
import UserExpenseList from "./UserExpenseList";

const UserExpense = () => {
  const [amount, setAmount] = useState();
  const [desciption, setDescription] = useState();
  const [category, setCategory] = useState("Food");
  const [firebaseData, setFirebaseData] = useState([]);
  const [editButton, setEditButton] = useState(false);

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
    category: category,
  };

  const sendDataHandler = (e) => {
    getData();
    postData();
  };

  const postData = async () => {
    const resp = await fetch(
      "https://expensetracker-68061-default-rtdb.firebaseio.com/Users-Expenses.json",
      {
        method: "POST",
        body: JSON.stringify({ userData }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await fetch(
      "https://expensetracker-68061-default-rtdb.firebaseio.com/Users-Expenses.json"
    );
    const data = await resp.json();

    let arr = [];
    for (let key in data) {
      console.log(data[key].amount);
      arr.push({
        amount: data[key].amount,
        description: data[key].desciption,
        category: data[key].category,
        key: key,
      });
    }
    console.log(arr);
    setFirebaseData([...arr]);
  };
  console.log(firebaseData);

  const content = firebaseData.map((ele) => {
    console.log(ele);

    // return (
    //   <div className="flex gap-10 bg-red-500 p-5 text-white">
    //     <div>{ele.amount}</div>
    //     <div>{ele.desciption}</div>
    //     <div>{ele.category}</div>
    //   </div>
    // );
  });
  console.log(firebaseData);

  return (
    <div className="flex flex-col  gap-4 p-4 justify-center items-center ">
      <div>
        <input
          onChange={amountHandler}
          className="p-4 text-white"
          type="text"
          placeholder="Amount"
        />
      </div>
      <div>
        <input
          onChange={descriptionHandler}
          className="p-4 text-white"
          type="text"
          placeholder="Description"
        />
      </div>
      <select
        onChange={categoryHandler}
        className="p-4 text-2xl w-[11.4rem]"
        name=""
        id=""
      >
        <option value="Food">Food</option>
        <option value="Petrol">Petrol</option>
        <option value="Salary">Salary</option>
      </select>
      <div>
        <button
          onClick={sendDataHandler}
          className="text-black border p-4 bg-green-500 font-serif font-bold rounded-xl"
        >
          Add Expense
        </button>
      </div>
      {firebaseData.map((ele) => (
        <UserExpenseList
          currentDat={userData}
          amount={ele.amount}
          desciption={ele.desciption}
          category={ele.category}
          key2={ele.key}
          onEdit={getData}
        />
      ))}
    </div>
  );
};

export default UserExpense;
