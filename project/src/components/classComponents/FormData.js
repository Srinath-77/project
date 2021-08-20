import React, {Component  } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import FormList from './FormList';

class FormData extends Component {
    constructor(props) {
      super(props);
      this.state ={ firstName: "", lastName: "" }
      this.firstName = React.createRef();
      this.lastName = React.createRef();
    }

    handleSubmit() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.firstName.current.focus();
      this.lastName.current.focus();
      console.log(this.firstName)
    }

    
    render() {
      return(
        <Card className="Sample">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <label>FirstName
                <input placeholder="FirstName " ref={this.firstName} />
              </label><br></br>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>LastName
                <input placeholder="LastName" ref={this.lastName} />
              </label><br></br>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" type="submit">Submit</Button>
              </div>
            </Col>
          </Row>
  
        </Form>
        { !!this.state && this.state.length !== 0 && 
        <Row>
          <FormList props={{ qp: this.state }} />
        </Row>
      } 
      </Card >
      );
    }
}

export default FormData 