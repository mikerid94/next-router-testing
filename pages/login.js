import Link from "next/link";
import Router from "next/router";

const Login = () => {
  const handleClick = () => Router.push("/");
  return (
    <div>
      <h1>Login Page</h1>
      <Link href="user/testid">Login</Link>
      <div onClick={() => handleClick()}>Logout</div>
    </div>
  );
};

export default Login;
