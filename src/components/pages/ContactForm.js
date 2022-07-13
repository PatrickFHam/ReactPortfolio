import React from 'react';
import axios from 'axios';
import { Button, Container, Col, Text, Input, Textarea } from '@nextui-org/react';
import '../../styles/Contact.css';

class Form extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  };

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  };

  

  handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello, ${name}! \n Your email address is: ${email}. \n In the future, your message will be sent to Patrick... but not yet.`);
    setName('');
    setEmail('');
  };

  render () {
    <Container>
      <Col>
        <Text h3>Send a Quick Message</Text>
        <form className="contact-form" onSubmit={this.handleFormSubmit.bind(this)} method="POST">
          <Input clearable underlined 
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            aria-label='name'
          />
          <Input clearable underlined 
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="email address"
            aria-label='email'
          />
          <Textarea minrows={2} underlined placeholder="body of your message here" aria-label='input-text' />
          <Button auto rounded type="button" onClick={handleFormSubmit}>
            Send Message
          </Button>
        </form>
        </Col>
    </Container>
  };

  onNameChange(e) {
	  this.setState({name: e.target.value})
  }

  onEmailChange(e) {
	  this.setState({email: e.target.value})
  };

  onMessageChange(e) {
	  this.setState({message: e.target.value})
  };
}

export default Form;
