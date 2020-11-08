import React, { useState } from 'react';


function Button() {

  const [showResults, setShowResults] = useState(false)
  const RemoveDiv = () => setShowResults(false)
  const AppearDiv = () => setShowResults(true)


  const DIV = () => (
    <div>
      Dave P Is a Mug
    </div>
  )

  const DIV1 = () => (
    <div>
      Dave B Is not a Mug
    </div>
  )
    return (
<div class="centered">
        <button onClick={AppearDiv}>
          Is Dave P a Mug?
          </button>
          <button onClick={RemoveDiv}>
          Is Dave B a Mug?
          </button>
          { showResults ? <DIV/> : <DIV1/> }
        </div>
    );
}

export default Button;