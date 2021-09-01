import React, { Component } from "react";
import {Form} from "react-bootstrap";
class Filter extends Component {
    
    optionValue = event => {
        let numberOfHorns = event.target.value;
        console.log(numberOfHorns);
        this.props.filter(numberOfHorns);
    }
    render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Select aria-label="Default select example"  onChange={this.optionValue} >
              <option value='All'>All</option>
              <option value='1' >One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="wow">WoW</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default Filter;
