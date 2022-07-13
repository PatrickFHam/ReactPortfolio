import React, { useState } from 'react';
import { Button, Container, Col, Text, Input, Textarea, Modal } from '@nextui-org/react';
import '../../styles/Contact.css';

const ContactForm = () => {
  
  // MODAL TRIGGERS //
  const [visible, setVisible] = React.useState(false);
  const showModalHandler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  
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
    // alert(result.status);
    console.log(result.status);
    showModalHandler();
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

    <Modal
        closeButton
        aria-labelledby="contact-form-successful"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Message Send 
            <Text b size={18}>
              Successful!
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text h5>The form you filled out was successfully sent to Patrick.</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

  </Container>

  );
};

export default ContactForm;