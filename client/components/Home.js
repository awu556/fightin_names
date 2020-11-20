import React, {useState} from "react";
import {HomeDiv, RandomizeForm} from './styledComponents/styledHome'

const fightNames = ["Argyle Socks", "The Banshee", "The Baby Puncher", "Lights Out", "Thunder", "Bonecrusher", "The Atomic Bull"]

const Home = (props) => {
  const [fightName, setFightName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setFightName(`${firstName} "${fightNames[getRandomInt(7)]}" ${lastName}`)
  }

  const handleChangeFirst = (evt) => {
    setFirstName(evt.target.value)
  }

  const handleChangeSecond = (evt) => {
    setLastName(evt.target.value)
  }

  // console.log(firstName, lastName)
  // console.log(fightName)
  return (
    <HomeDiv>
      <h1>
        You've decided to enter the world of professional mixed martial arts...
      </h1>
      <h2>But you'll need a good nickname before you enter.</h2>

      <RandomizeForm onSubmit={handleSubmit}>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname" value={firstName} onChange={handleChangeFirst}/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lname" value={lastName} onChange={handleChangeSecond}/>
        <button type="submit">Randomize me a nickname!</button>
      </RandomizeForm>

      {fightName !== '' ? <h1>{fightName}</h1> : ''}
      
    </HomeDiv>
  );
};

export default Home;
