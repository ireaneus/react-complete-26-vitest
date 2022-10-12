import { useState } from 'react';

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h4>Greetings</h4>
      {!changeText && <p>Here is some info</p>}
      {changeText && <p>Changed Text</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};
export default Greeting;
