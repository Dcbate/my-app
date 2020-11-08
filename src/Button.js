import React, { useState } from 'react';


function Button() {

  const [showResults, setShowResults] = useState(false)
  const RemoveDiv = () => setShowResults(false)
  const AppearDiv = () => setShowResults(true)


  const DIV = () => (
    <div>
      Div is here
    </div>
  )
    return (
        <div>
        <button onClick={AppearDiv}>
          Appear
          </button>
          <button onClick={RemoveDiv}>
          Remove
          </button>
          { showResults ? <DIV/> : null }
        </div>
        
    );
}

export default Button;