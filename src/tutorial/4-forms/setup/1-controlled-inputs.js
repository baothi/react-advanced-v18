import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log('e.target.value : ',firstName, email)
    if(firstName && email){
      const person = { id: new Date().getTime().toString(), firstName, email };
      // console.log('person : ',person);
      setPeople((people)=>{
        return [...people, person]
       })
       setFirstName('');
       setEmail('');
    }else{
      console.log('email : ',email);
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor="firstName">Name: </label>
            <input type="text" className="form-control"
              id="firstName" value={firstName} name='firstName'
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className='form-control'>
            <label htmlFor="email">Email: </label>
            <input type="text" className="form-control"
              id="email" value={email} name='email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <button type="submit" className="btn btn-primary">Add Person</button>
        </form>
        {people.map((person, index) => {
          const {id, firstName, email } = person;
          return (
            <div className='item' id1={id} key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
