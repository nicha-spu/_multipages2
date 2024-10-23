import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { verifyUser } from "../../data/users";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();
  const [passwordType, setPasswordType] = useState("password");

  const handleLogin = () => {
    const user = userRef.current.value;
    const pass = passRef.current.value;
    const userInfo = verifyUser(user, pass);

    // Clear input fields
    userRef.current.value = "";
    passRef.current.value = "";

    if (userInfo === null) {
      alert("Wrong username or password");
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
    }
  };

  const handlePasswordFocus = () => {
    setPasswordType("text");
  };

  const handlePasswordBlur = () => {
    setPasswordType("password");
  };

  return (
    <div className="login-container">
      <img className="login-image" src="large.jpeg" alt="" srcset="" />
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="user"
          ref={userRef}
          list="user-suggestions"
          style={{ textAlign: "center" }}
        />
        <datalist id="user-suggestions">
          <option value="user" />
          <option value="admin" />
        </datalist>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type={passwordType}
          placeholder="pass"
          ref={passRef}
          list="password-suggestions"
          style={{ textAlign: "center" }}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />
        <datalist id="password-suggestions">
          <option value="pass" />
          <option value="admin" />
        </datalist>
      </Form.Group>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
