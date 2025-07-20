import { useState } from 'react'

function Square() {
  const [value, setValue] = useState('');

  function handleClick(){
    setValue('x');
  }
  return (
  <button 
    className='Square' onClick={handleClick}>{value}
  </button>
  );
}

export default function Board() {
  return (
    <div className='Board'>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  )
}

