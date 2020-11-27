import { useRouter } from "next/router";

const User = () => {
  const { query } = useRouter();
  const { id } = query;
  return (
    <div>
      <h1>User Page</h1>
      <div>{id}</div>
    </div>
  );
};

export default User;
