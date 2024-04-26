import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const formData = { username, password };
    const csrftoken = getCookie("csrftoken");

    try {
      const response = await fetch(
        "https://ahm-computer-backend.onrender.com/customer/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("customer_id", data.customer_id);

      if (data.isStaff) {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }

      window.location.reload();
      alert("Login successful!");
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again later.");
    }
  };

  const handleDemoUser = () => {
    // Populate form fields with demo user credentials
    const demoUsername = "mowuj";
    const demoPassword = "A@san1122";
    document.querySelector('input[name="username"]').value = demoUsername;
    document.querySelector('input[name="password"]').value = demoPassword;
  };

  const handleDemoAdmin = () => {
    // Populate form fields with demo admin credentials
    const demoUsername = "admin";
    const demoPassword = "12345";
    document.querySelector('input[name="username"]').value = demoUsername;
    document.querySelector('input[name="password"]').value = demoPassword;
  };

  function getCookie(name) {
    const cookieValue = document.cookie.match(
      "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    );
    return cookieValue ? cookieValue.pop() : "";
  }

  return (
    <div className="w-50 mx-auto my-5 p-5 border border-2 rounded-5 shadow-lg">
      <Form method="post" onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Your Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Your Password"
            required
          />
        </Form.Group>

        <Form.Text className="text-primary mb-3">
          <Link className="text-primary" to="/register">
            Don't have an account? Register now!
          </Link>
        </Form.Text>

        <Button variant="primary" type="submit" className="ms-3">
          Login
        </Button>

        <hr />
        <small>Login as Demo User..</small>
        <hr />
        <Button variant="primary" onClick={handleDemoUser} className="me-3">
          User Demo
        </Button>
        <Button variant="primary" onClick={handleDemoAdmin}>
          Admin Demo
        </Button>
      </Form>
    </div>
  );
};

export default Login;
