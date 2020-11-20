import React, {useState} from "react";
import {HomeDiv, RandomizeForm} from './styledComponents/styledHome'

const Home = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleChangeFirst = (evt) => {
    setFirstName(evt.target.value)
  }

  const handleChangeSecond = (evt) => {
    setLastName(evt.target.value)
  }

  console.log(firstName, lastName)
  return (
    <HomeDiv>
      <h1>
        You've decided to enter the world of professional mixed martial arts...
      </h1>
      <h2>But you'll need a good nickname before you enter.</h2>

      <RandomizeForm>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname" value={firstName} onChange={handleChangeFirst}/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lname" value={lastName} onChange={handleChangeSecond}/>
        <button>Randomize me a nickname!</button>
      </RandomizeForm>
      
    </HomeDiv>
  );
};

export default Home;
