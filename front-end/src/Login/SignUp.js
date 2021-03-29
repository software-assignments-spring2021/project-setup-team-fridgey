import NavBar from "../NavBar";

const SignUp = () => {
  return (
    <div>
      <NavBar/>
      <header className="App-header">
        <h1>Sign Up</h1>
        <p>Username:</p>
        <input type="text"/>
        <p>Email:</p>
        <input type="text"/>
        <p>Password:</p>
        <input type="text"/>
        <p>Re-enter Password:</p>
        <input type="text"/>
      </header>
    </div>
  );
};

export default SignUp