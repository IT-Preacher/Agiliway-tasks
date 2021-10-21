import React, { Component } from "react";
import "./form.scss";

class FromRegistration extends Component {
  state = {
    fields: {
      name: {
        name: "name",
        label: "name",
        value: "",
        type: "text",
        error: null,
        validator: (value = "") => {
          return value.length >= 2 ? false : "Name is too short";
        },
      },
      email: {
        name: "email",
        label: "email",
        value: "",
        type: "email",
        error: null,
        validator: (value = "") => {
          let reg =
            /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          return value.match(reg) ? false : null;
        },
      },
      password: {
        name: "password",
        label: "password",
        value: "",
        type: "password",
        error: null,
        validator: (value = "") => {
          return value.match(
            /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
          )
            ? false
            : "Password is too simple";
        },
      },
      confirmPassword: {
        name: "confirmPassword",
        label: "confirm password",
        value: "",
        type: "password",
        error: null,
        validator: (value = "", allValues) => {
          return value === allValues.password ? false : "Passwords isnt match";
        },
      },
    },
    isError: null,
  };

  handleChange(event) {
    event.preventDefault();

    const { name, value } = event.target;
    const currentField = this.state.fields[name];
    const allValues = Object.entries(this.state.fields).reduce(
      (newObj, [fieldName, fieldState]) => {
        return { ...newObj, [fieldName]: fieldState.value };
      },
      {}
    );
    const error = currentField.validator(value, allValues);

    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...this.state.fields[name], value, error },
      },
    });
  }

  handlePassword = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    const { password, confirmPassword } = this.state.fields;
    

    const passwordError = password.validator(value);

    //RickMor98
    this.setState(
      {
        fields: {
          ...this.state.fields,
          password: {
            ...password,
            error: passwordError,
            value,
          },
        },
      },
      () => {
        if (this.state.fields.confirmPassword.value) {
        const allValues = Object.entries(this.state.fields).reduce(
            (newObj, [fieldName, fieldState]) => {
              return { ...newObj, [fieldName]: fieldState.value };
            },
            {}
          );
        
          const confirmPasswordError = confirmPassword.validator(
            this.state.fields.confirmPassword.value,
            allValues
          );
          this.setState({
            fields: {
              ...this.state.fields,
              confirmPassword: {
                ...this.state.fields.confirmPassword,
                error: confirmPasswordError,
              },
            },
          });
        }
      }
    );
  };

  handleReset(event) {
    event.preventDefault();

    const { fields } = this.state;
    const updatedValues = {};

    Object.entries(fields).forEach(([fieldname]) => {
      const updatedFields = { ...fields[fieldname] };
      updatedFields.value = "";
      updatedFields.error = false;
      updatedValues[fieldname] = updatedFields;
    });

    this.setState({ fields: updatedValues });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { fields, isError } = this.state;
    const updatedFields = {};
    const errors = []
    const allValues = Object.entries(this.state.fields).reduce(
      (newObj, [fieldName, fieldState]) => {
        return { ...newObj, [fieldName]: fieldState.value };
      },
      {}
    );

    Object.entries(fields).forEach(([fieldName, fieldState]) => {
      const updatedField = { ...fields[fieldName] };
      const error = fieldState.validator(fieldState.value, allValues);
      updatedField.error = error;

      updatedFields[fieldName] = updatedField;
    });

    this.setState({ fields: updatedFields },() => {
        Object.entries(this.state.fields).forEach(([fieldName, fieldState]) => {
          let error = fieldState.error;
          errors.push(error);
        });
        let fieldsError = !errors.every((err) => err === false);
        this.setState({ isError: fieldsError }, () => {
          !this.state.isError &&
            Object.entries(this.state.fields).forEach(
              ([fieldName, fieldState]) => {
                console.log(`${fieldName}: ${fieldState.value}`);
              }
            );
        });
      });
  }

  render() {
    const {
      fields: { name, email, password, confirmPassword },
    } = this.state;

    return (
      <div className="form-registration">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <h1 className="form-title">Form</h1>
          {/* user name block */}
          <div className="input-conteiner">
            <div className="label-conteiner">
              <label htmlFor="name">
                <span className="span-label">{name.label}</span>
              </label>
            </div>
            <input
              type={name.type}
              name={name.name}
              value={name.value}
              id={name.name}
              onChange={(event) => this.handleChange(event)}
            />
            <div className="conteiner-error">
              {name.error && <span className="span-error">{name.error}</span>}
            </div>
          </div>
          {/* email block */}
          <div className="input-conteiner">
            <div className="label-conteiner">
              <label htmlFor="email">
                <span className="span-label">{email.label}</span>
              </label>
            </div>
            <input
              type={email.type}
              name={email.name}
              value={email.value}
              id={email.name}
              onChange={(event) => this.handleChange(event)}
            />
            <div className="conteiner-error">
              {email.error && <span className="span-error">{email.error}</span>}
            </div>
          </div>
          {/* passwords block */}
          <div className="input-conteiner">
            <div className="label-conteiner">
              <label htmlFor="password">
                <span className="span-label">{password.label}</span>
              </label>
            </div>
            <input
              type={password.type}
              name={password.name}
              value={password.value}
              id={password.name}
              onChange={(event) => this.handlePassword(event)}
            />
            <div className="conteiner-error">
              {password.error && (
                <span className="span-error">{password.error}</span>
              )}
            </div>
          </div>
          <div className="input-conteiner">
            <div className="label-conteiner">
              <label htmlFor="password-confirm">
                <span className="span-label">{confirmPassword.label}</span>
              </label>
            </div>
            <input
              type={confirmPassword.type}
              name={confirmPassword.name}
              value={confirmPassword.value}
              id={confirmPassword.name}
              onChange={(event) => this.handleChange(event)}
            />
            <div className="conteiner-error">
              {confirmPassword.error && (
                <span className="span-error">{confirmPassword.error}</span>
              )}
            </div>
          </div>
          {/* buttons block */}
          <div className="button-conteiner">
            <button name="reset" onClick={(event) => this.handleReset(event)}>
              Reset
            </button>
            <button name="submit" style={{ marginLeft: 40 }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FromRegistration;
