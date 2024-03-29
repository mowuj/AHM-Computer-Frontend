import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const username = form.username.value;
      const password = form.password.value;
      const formData = { username: username, password: password };
      const csrftoken = getCookie("csrftoken");

      fetch("https://ahm-computer-backend.onrender.com/customer/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken, // Include CSRF token in headers
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
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
        })
        .catch((error) => {
          console.error("Error during login:", error);
          alert("Login failed. Please try again later.");
        });
    };


    function getCookie(name) {
      const cookieValue = document.cookie.match(
        "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
      );
      return cookieValue ? cookieValue.pop() : "";
    }
  return (
    <>
      <Form
        method="post"
        onSubmit={handleLogin}
        className="w-50 mx-auto my-5 p-5 border border-2 rounded"
      >
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
