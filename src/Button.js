import React, { useState } from 'react';


function Button() {

  const [showResults, setShowResults] = useState(false)
  const RemoveDiv = () => setShowResults(false) // minor one, wrap the func in {}, as without them it's implicit that you are returning from setShowResults -dont matter here cos its void anyway, but good practice
  const AppearDiv = () => setShowResults(true) // you  dont need this one


  const DIV = () => ( // dont need this
    <div>
      Dave P Is a Mug
    </div>
  )

  const DIV1 = () => ( //dont need this
    <div>
      Dave B Is not a Mug
    </div>
  )
    return (
<div class="centered">
        <button onClick={AppearDiv}> / dont need two separate parts here - one button only to delete
          Is Dave P a Mug?
          </button>
          <button onClick={RemoveDiv}> // camelCase you mug
          Is Dave B a Mug?
          </button>
          { showResults ? <DIV/> : <DIV1/> } // {showResults && <div>Dave is a mug</div>} -  when showResults is false the div is not rendered
        </div>
    );
}

export default Button;
