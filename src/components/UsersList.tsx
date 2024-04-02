import { useSelector } from "react-redux";

export const UsersList = () => {
  const users = useSelector((state: any) => state.userstt);

  return (
    <>
      {JSON.stringify(users)} <br />
    </>
  );
};
