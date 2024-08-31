import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex justify-around  items-center'>
      <div className='text-[5rem]'>Welcome To Expense Tracker</div>
      <div>Your Profile is Incomplete. <Link to='/userProfile'><button className='border bg-green-500 p-1 rounded-lg'>Complete Now</button></Link></div>
    </div>
  )
}

export default Home