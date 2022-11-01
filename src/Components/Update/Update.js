import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
   const storedUser = useLoaderData()
   const [user, setUser] = useState(storedUser)

   const handleAddUser = (event) => {
      event.preventDefault();
      // console.log(user)
      fetch(`http://localhost:5000/users/${storedUser._id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(user)
      })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount > 0) {
               alert('user update successfully')
            }
            // console.log(data);
         })

   }

   const handleInputChange = (event) => {
      // console.log(event.target);
      const field = event.target.name
      const value = event.target.value
      const newUser = { ...storedUser }
      newUser[field] = value;
      setUser(newUser)
   }
   return (
      <div>
         <h2>Please Update: {storedUser.name} </h2>

         <form onSubmit={handleAddUser}>
            <input type="text" name="name" defaultValue={storedUser.name} id="" onChange={handleInputChange} required /><br />
            <input type="text" defaultValue={storedUser.address} name="address" id="" onChange={handleInputChange} required /><br />
            <input type="email" defaultValue={storedUser.email} name="email" id="" onChange={handleInputChange} required /><br /><br />
            <button type="submit">Update User</button>
         </form><br />
      </div>
   );
};

export default Update;