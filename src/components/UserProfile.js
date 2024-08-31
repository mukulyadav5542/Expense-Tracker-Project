import React, { useRef } from 'react'

const UserProfile = () => {

    const nameRef = useRef('');
    const photoRef = useRef('');
    const token = localStorage.getItem('token');

    // const photoUrlHandler = (e) => {

    // };

    const updateHandler = (e) => {
        updateProfile();
    };

    const updateProfile = async () => {
        const resp = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAaDfIQlEPsBrQlUZpS0stYoPA8IVy7mA4', {
            method: 'POST',
            body: JSON.stringify({
                idToken: token,
                fullName: nameRef.current.value,
                profilePhotoUrl: photoRef.current.value,
                returnSecureToken: true,
            }),
            headers: {
                "Content-type": "application/json",
            },
        })

        const data = await resp.json()

        if (resp.ok) {
            console.log(data);
        }
    };

  return (
    <div>
        <div className="flex  gap-6 border justify-around text-2xl ">
            <div className=''>Winners never quite, Quitters never win.</div>
            <div className="italic bg-red-600 text-white p-4 rounded-xl ">Your profile is 64% completed. A complete Profile has higher chances of Landing a job. <span>Complete now</span></div>
        </div>
        <div className="border-b border-black text-2xl font-bold font-serif text-center  mt-10">
            Contact Details 
        </div>
        <div>
            <div className="flex flex-col items-center justify-center mt-5 gap-5">
                <label htmlFor='name'>Full Name:</label>
                <div><input ref={nameRef} className="bg-white border p-3 rounded-lg border-black" type='text' id='name' /></div>
                <label htmlFor='photo'>Profile Photo URL:</label>
                <div><input ref={photoRef} className="bg-white border p-3 rounded-lg border-black" type='text' id='photo' /></div>
            </div>
            <div className="text-center mt-5">
                <button onClick={updateHandler} className="bg-green-800 m-auto p-2 rounded-xl border  text-white">Update</button>
                <button className="bg-red-800 m-auto p-2 rounded-xl border text-white">Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default UserProfile