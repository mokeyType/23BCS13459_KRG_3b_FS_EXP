import React, { useState } from 'react';
 
const Home = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    function handleSubmit(){
        console.log('Name:', name);
        console.log('Email:', email);
        setName('');
        setEmail('');
    }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>

      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;