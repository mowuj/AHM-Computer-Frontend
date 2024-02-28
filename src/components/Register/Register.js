import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    const handleSignup = (e) => {
      e.preventDefault();
      const form = e.target;
      const username = form.username.value;
      const firstname = form.firstname.value;
      const lastname = form.lastname.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirm_password = form.confirm_password.value;

      if (password !== confirm_password) {
        alert("Passwords do not match");
        return;
      }

      const formData = {
        username: username,
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
        confirm_password: confirm_password,
      };
      const csrftoken = getCookie("csrftoken"); // Get CSRF token from cookie
      fetch("https://fruitables-api.onrender.com/user/register/", {
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
          console.log("Signup successful:", data);
          alert("Signup successful!");
        })
        .catch((error) => {
          console.error("Error during signup:", error);
          alert("Signup failed. Please try again later.");
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
        onSubmit={handleSignup}
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
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            placeholder="Your First Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            placeholder="Your Last Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@flowbite.com"
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

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        <Form.Text className="text-primary mb-3">
          <Link className="text-primary" to="/login">
            Already have an account? Login now!
          </Link>
        </Form.Text>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Register;
