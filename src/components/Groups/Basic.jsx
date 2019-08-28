import React from "react";
import FieldInput from "../FieldInput";

export default class Basic extends React.Component {
  render() {
    const {
      firstname,
      lastname,
      password,
      repeatPassword,
      gender,
      onChange,
      errors
    } = this.props;
    return (
      <div>
        <FieldInput
          labelText="Firstname"
          id="firstname"
          type="text"
          ariaLabel="Enter firstname"
          placeholder="Enter firstname"
          name="firstname"
          value={firstname}
          onChange={onChange}
          errors={errors.firstname}
        />
        <FieldInput
          labelText="Lastname"
          id="lastname"
          type="text"
          ariaLabel="Enter lastname"
          placeholder="Enter lastname"
          name="lastname"
          value={lastname}
          onChange={onChange}
          errors={errors.lastname}
        />

        <FieldInput
          labelText="Password"
          id="password"
          type="password"
          ariaLabel="Enter password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={onChange}
          errors={errors.password}
        />
        <FieldInput
          labelText="Repeat password"
          id="repeatPassword"
          type="password"
          ariaLabel="Repeat password"
          placeholder="Repeat password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={onChange}
          errors={errors.repeatPassword}
        />
        <span>Gender</span>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </div>
    );
  }
}
