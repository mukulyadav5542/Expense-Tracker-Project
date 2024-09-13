import React, { useState } from 'react'

const UserExpenseList = (props) => {

    const [editButton, setEditButton] = useState(false);

    const deleteData = async (e) => {
        e.target.parentElement.remove();
        console.log(props);
        await fetch("https://expensetracker-68061-default-rtdb.firebaseio.com/Users-Expenses.json", {
            method: "DELETE",
        })
    };

    const editButtonHandler = (e) => {
        setEditButton(!editButton);
    };
    console.log(props.currentData);

    const editApiHandler = async () => {
        try {
            console.log("PUT API called");
            const resp = await fetch(`https://expensetracker-68061-default-rtdb.firebaseio.com/Users-Expenses/${props.key2}.json`, {
                method: "PUT",
                body:JSON.stringify(props.currentData),
                headers: {
                    "Content-type" : "application/json",
                }
            })
            console.log("edit clicked");
            setEditButton(!editButton);

            const data = await resp.json();
            console.log(data);
            props.onEdit()
        }
        catch(error) {

        }
    };

  return (
    <div>
        <div className="flex gap-10 bg-red-500 p-5 text-white">
            <div>{props.amount}</div>
            <div>{props.description}</div>
            <div>{props.category}</div>
            <div>{props.key2}</div>
            <button onClick={deleteData}>Delete Expense</button>
            <div>
                {editButton ? ( <button onClick={editApiHandler}>Click here after Editing</button> ) : ( <button onClick={editButtonHandler}>Edit Expense</button> )}
            </div>
        </div>
    </div>
  )
}

export default UserExpenseList