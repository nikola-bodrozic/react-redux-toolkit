import { useDispatch } from "react-redux";
import { addName, removeName } from "../reducers/usersSlice";
import { useState } from "react";

export const Users = () => {
  const [userName, setUserName] = useState("")

  const dispatch = useDispatch();
  
  function add() {
    dispatch(addName({ name: userName }));
  }

  function remove() {
    dispatch(removeName());
  }

  function handleChange(event: any) {
    setUserName(event.target.value)
  }

  return (
    <>
      <input name="firstname" onChange={handleChange} />
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </>
  );
};
