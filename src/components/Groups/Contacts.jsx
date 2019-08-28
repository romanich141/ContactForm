import React from "react";
import countries from "../../data/countries";
import FieldInput from "../FieldInput";
import cities from "../../data/cities";
export default class Contacts extends React.Component {
  getCities = country => {
    const citiesList = [];
    for (let item in cities) {
      if (cities[item].country === Number(country)) {
        citiesList.push({
          id: item,
          name: cities[item].name
        });
      }
    }
    return citiesList;
  };
  render() {
    const { email, mobile, country, city, onChange, errors } = this.props;
    const citiesList = this.getCities(country);
    return (
      <div>
        <FieldInput
          labelText="Email"
          id="email"
          type="email"
          ariaLabel="Enter you email"
          placeholder="Enter you email"
          name="email"
          value={email}
          onChange={onChange}
          errors={errors.email}
        />
        <FieldInput
          labelText="Mobile"
          id="mobile"
          type="phone"
          ariaLabel="Enter you mobile"
          placeholder="Enter you mobile"
          name="mobile"
          value={mobile}
          onChange={onChange}
          errors={errors.mobile}
        />
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={onChange}
            className="form-control"
          >
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            id="city"
            name="city"
            value={city}
            onChange={onChange}
            className="form-control"
          >
            <option value="">Select city</option>
            {citiesList.map(city => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.city ? (
            <div className="invalid-feedback">{errors.city}</div>
          ) : null}
        </div>
      </div>
    );
  }
}
