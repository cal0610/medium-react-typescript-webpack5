import React from 'react';

export const Button = () => {
  function handleClick() {
    alert('hello world');
  }

  return (
    <button onClick={handleClick}>Click me!</button>
  )
}