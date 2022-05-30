import React, { useState } from 'react';
import { Button, Container, Col, Text, Row, Input, Textarea } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faList, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../styles/Contact.css';

export default function Form() {

  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'name' ? setName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${name} ${email}`);
    setName('');
    setEmail('');
  };

  return (
    <Container>
      <Col>
        <Text h3>Send a Quick Message</Text>
        <form className="form">
          <Input clearable underlined 
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <Input clearable underlined 
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="email address"
          />
          <Textarea minrows={2} underlined placeholder="body of your message here" />
          <Button auto rounded type="button" onClick={handleFormSubmit}>
            Send Message
          </Button>
        </form>
        </Col>
    </Container>
  );
}
