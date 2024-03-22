import { useDispatch, useSelector } from "react-redux";
import { addName, removeName } from "../reducers/usersSlice";

export const Users = () => {
  const users = useSelector((state: any) => state.userstt);
  const dispatch = useDispatch();
  function add() {
    dispatch(addName({ name: "some name" }));
  }

  function remove() {
    dispatch(removeName());
  }
  return (
    <>
      {JSON.stringify(users)} <br />
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </>
  );
};
