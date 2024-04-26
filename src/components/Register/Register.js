import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const first_name = form.first_name.value;
    const last_name = form.last_name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    const mobile_no = form.mobile_no.value;
    const address = form.address.value;
    const image = form.image.files[0];

    if (password !== confirm_password) {
      alert("Passwords do not match");
      return;
    }

    const formData = new FormData(); // Use FormData to handle file uploads
    formData.append("username", username);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirm_password", confirm_password);
    formData.append("mobile_no", mobile_no);
    formData.append("address", address);
    formData.append("image", image); 

    const csrftoken = getCookie("csrftoken");

    fetch("https://ahm-computer-backend.onrender.com/customer/register/", {
      method: "POST",
      headers: {
        "X-CSRFToken": csrftoken,
      },
      body: formData,
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
        className="mx-auto my-5 p-5 border border-2 rounded-5 shadow-lg"
        style={{ maxWidth: "600px" }}
        enctype="multipart/form-data"
      >
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="User Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Your First Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
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

        <Form.Group className="mb-3">
          <Form.Label>Your Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="mobile_no"
            placeholder="Your Mobile Number"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Address</Form.Label>
          <Form.Control type="text" name="address" placeholder="Your Address" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Image</Form.Label>
          <Form.Control type="file" name="image" accept="image/*" required />
        </Form.Group>

        <Form.Text className="text-primary mb-3">
          <Link className="text-primary" to="/login">
            Already have an account? Login now!
          </Link>
        </Form.Text>

        <Button variant="primary" type="submit" className="ms-3">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
