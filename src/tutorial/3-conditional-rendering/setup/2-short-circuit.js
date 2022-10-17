import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [ text,setText] = useState('');
  const [isError,setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
  <>
    {/* <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1> */}
    {/* {if(){console.log("hello word");}} */}
    {/* <h1>{text || 'thi bao'}</h1> */}
    <button className='btn btn-primary' onClick={()=> setIsError(!isError)}>toggle error</button>
    {!isError && <h1>Error ...</h1>}
    {!isError ? <h1>there is an error...</h1> : <h1>There is not an error...</h1>}
    {/* {text && <h1>hello word</h1>}
    {!text && <h1>hello word!!!</h1>} */}
  </>
  );
};

export default ShortCircuit;
