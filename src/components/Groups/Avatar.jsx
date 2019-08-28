import React from "react";

export default class Avatar extends React.Component {
  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = event => {
      this.props.onChange({
        target: {
          name: "avatar",
          value: event.target.result
        }
      });
    };
  };
  render() {
    const { avatar, onChange, errors } = this.props;
    return (
      <div>
        <img
          className="avatarImage mb-3"
          src={
            avatar
              ? avatar
              : "http://pngimages.net/sites/default/files/contacts-png-image-54129.png"
          }
          alt="Your avatar"
        />
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                name="avatar"
                id="avatar"
                onChange={this.onChangeAvatar}
              />
              <label
                className={
                  errors.avatar === "Required"
                    ? "custom-file-label border-red"
                    : "custom-file-label border-normal"
                }
                htmlFor="avatar"
              >
                Choose avatar
              </label>
            </div>
            {errors.avatar ? (
              <div className="invalid-feedback">{errors.avatar}</div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
