import React, { Component } from "react";
import Steps from "./Steps";
import Basic from "./Groups/Basic";
import Contacts from "./Groups/Contacts";
import Avatar from "./Groups/Avatar";
import InfoCard from "./Groups/InfoCard";

const initialState = {
  activeStep: 0,
  firstname: "",
  lastname: "",
  password: "",
  repeatPassword: "",
  email: "",
  mobile: "",
  country: "1",
  city: "",
  gender: "male",
  agree: true,
  avatar: "",
  steps: [
    {
      name: "Basic",
      isActive: true,
      isCompleted: false
    },
    {
      name: "Contacts",
      isActive: false,
      isCompleted: false
    },
    {
      name: "Avatar",
      isActive: false,
      isCompleted: false
    },
    {
      name: "Finish",
      isActive: false,
      isCompleted: false
    }
  ],
  errors: {
    firstname: "",
    lastname: "",
    password: "",
    repeatPassword: "",
    email: "",
    mobile: "",
    city: "",
    avatar: ""
  }
};
export default class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  onChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  previousStep = () => {
    const steps = [...this.state.steps];
    const newActiveStes = this.state.activeStep - 1;
    steps[this.state.activeStep].isActive = false;
    steps[newActiveStes].isActive = true;
    steps[newActiveStes].isCompleted = false;
    this.setState({
      activeStep: newActiveStes,
      steps: steps
    });
  };
  getErrorsByValues = () => {
    const errors = {};
    switch (this.state.activeStep) {
      case 0:
        if (this.state.firstname === "") {
          errors.firstname = "Required";
        } else if (this.state.firstname.length < 5) {
          errors.firstname = "Must be 5 characters or more";
        }
        if (this.state.lastname === "") {
          errors.lastname = "Required";
        } else if (this.state.lastname.length < 5) {
          errors.firstname = "Must be 5 characters or more";
        }
        if (this.state.password === "") {
          errors.password = "Required";
        } else if (this.state.password.length < 3) {
          errors.firstname = "Must be 3 characters or more";
        }
        if (this.state.repeatPassword !== this.state.password) {
          errors.repeatPassword = "Must be equal password";
        }
        break;
      case 1:
        if (this.state.email === "") {
          errors.email = "Required";
        } else if (
          this.state.email.length < 5 ||
          !this.state.email.includes("@")
        ) {
          errors.email = "Must be write email";
        }
        if (this.state.mobile === "") {
          errors.mobile = "Required";
        }
        if (this.state.city === "") {
          errors.city = "Required";
        }

        break;
      case 2:
        if (this.state.avatar === "") {
          errors.avatar = "Required";
        }
        break;
      default:
    }
    return errors;
  };
  onSubmit = event => {
    const errors = this.getErrorsByValues();
    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      });
    } else {
      const steps = [...this.state.steps];
      const nextActive = this.state.activeStep + 1;
      steps[nextActive].isActive = true;
      steps[this.state.activeStep].isActive = false;
      steps[this.state.activeStep].isCompleted = true;
      this.setState({
        activeStep: nextActive,
        steps: steps,
        errors: {}
      });
    }
  };
  render() {
    return (
      <div className="card wrapper">
        <div className="container mt-5">
          <div className="row">
            <Steps steps={this.state.steps} />
          </div>
        </div>
        <form className="p-5">
          <h1 className="text-center">Contact form</h1>
          {this.state.steps[0].isActive && (
            <Basic
              firstname={this.state.firstname}
              lastname={this.state.lastname}
              password={this.state.password}
              repeatPassword={this.state.repeatPassword}
              gender={this.state.gender}
              onChange={this.onChange}
              errors={this.state.errors}
            />
          )}
          {this.state.steps[1].isActive && (
            <Contacts
              email={this.state.email}
              mobile={this.state.mobile}
              country={this.state.country}
              city={this.state.city}
              onChange={this.onChange}
              errors={this.state.errors}
            />
          )}
          {this.state.steps[2].isActive && (
            <Avatar
              onChange={this.onChange}
              avatar={this.state.avatar}
              errors={this.state.errors}
            />
          )}
          {this.state.steps[3].isActive && (
            <InfoCard
              isOpenInfo={this.state.isOpenInfo}
              avatar={this.state.avatar}
              username={this.state.username}
              email={this.state.email}
              mobile={this.state.mobile}
              gender={this.state.gender}
              cleanState={() => {
                this.setState(initialState);
              }}
            />
          )}
          <div className="d-flex justify-content-between mt-3">
            <button
              type="button"
              className="btn btn-primary"
              disabled={this.state.steps[0].isActive}
              onClick={this.previousStep}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onSubmit}
              disabled={this.state.steps[3].isActive}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}
