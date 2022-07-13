import React, { useState } from 'react';
import { Button, Container, Col, Text, Input, Textarea } from '@nextui-org/react';
import '../../styles/Contact.css';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Container>
    <Col>
      <Text h3>Send a Quick Message</Text>
        <form className="form" onSubmit={handleFormSubmit}>
          <Input clearable underlined 
            required
            name="name"
            htmlFor="name"
            id="name"
            type="text"
            placeholder="name"
            aria-label='name'
          />
          <Input clearable underlined 
            required
            name="email"
            htmlFor="email"
            id="email"
            type="text"
            placeholder="email address"
            aria-label='email'
          />
          <Textarea required htmlFor="message" id="message" minrows={2} underlined placeholder="body of your message here" aria-label='input-text' />
          <Button auto rounded type="submit">
            {status}
          </Button>
        </form>
    </Col>
  </Container>

  );
};

export default ContactForm;