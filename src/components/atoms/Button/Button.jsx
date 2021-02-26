import React from 'react';

function Button({ children, sound }){
  const makeSound = (e) => {
    e.preventDefault();
    window.alert(sound)
  }

  return (
    <button
      className="btn btn-primary"
      type="button"
      onClick={makeSound}
    >
      {children}
    </button>
  );
}

export default Button;
