import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: "",
  };

  handleChange = (event) => {
    //this.setState({ userName: event.target.value });
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!", 2);
    alertify.success(this.state.password + " added to db!", 2);
    alertify.success(this.state.city + " added to db!", 2);
    alertify.success(this.state.description + " added to db!", 2);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              name="password"
              onChange={this.handleChange}
              type="password"
              id="password"
              placeholder="Enter password"
            />
          </FormGroup>

            <FormGroup>
                <Label for="description">Description</Label>
                <Input
                    type="textarea"
                    name="description"
                    id="description"
                    placeholder="Enter description"
                    onChange={this.handleChange}
                />
            </FormGroup>

            <FormGroup>
                <Label for="city">City</Label>
                <Input

                    type="select"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    onChange={this.handleChange}
                >
                    <option>Ankara</option>
                    <option>İstanbul</option>
                    <option>İzmir</option>
                    <option>Antalya</option>
                    <option>Adana</option>
                </Input>
            </FormGroup>

            <Button type="submit">Save</Button>

        </Form>
      </div>
    );
  }
}
