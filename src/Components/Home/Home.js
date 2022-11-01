import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
   const users = useLoaderData()
   const [displayUsers, setDisplayUsers] = useState(users);
   const handleDelete = user => {
      const agree = window.confirm(`Are You sure to delete : ${user.name}`)
      console.log(agree);
      if (agree) {
         // console.log('delete user', user._id)
         fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               if (data.deletedCount > 0) {
                  alert('Users deleted successfullay.')
                  const remainingUsers = displayUsers.filter(usr => usr._id !== user._id)
                  setDisplayUsers(remainingUsers)
               }

            })
      }
   }
   return (
      <div>
         <h1>This is Moudle 65: home {displayUsers.length}</h1>
         <button><Link to='/add_users'>Go User</Link></button>
         <div>
            {
               displayUsers.map(user => <p
                  key={user._id}
               >{user.name} {user.email} <button
                  onClick={() => handleDelete(user)}>X</button>
               </p>)
            }
         </div>
      </div>
   );
};

export default Home;