import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import CustomField from "./CustomField";
import "./finalForm.scss";

class FinalForm extends Component {
  state = {
    fields: {
      name: {
        name: "name",
        label: "name",
        type: "text",
        placeholder: "Input name",
      },
      email: {
        name: "email",
        label: "email",
        type: "email",
        placeholder: "example@email.com",
      },
      password: {
        name: "password",
        label: "password",
        type: "password",
        placeholder: "Password",
      },
      confirmPassword: {
        name: "confirmPassword",
        label: "confirm password",
        type: "password",
        placeholder: "Repeat your password",
      },
    },
  };

  onSubmit = (props) => {
    console.log(props);
  };
  render() {
    return (
      <Form
        onSubmit={(props) => this.onSubmit(props)}
        validate={(values) => {
          const errors = {};
            
          if (!values.name) {
            errors.name = "Required";
          } else if (values.name.length < 2) {
            errors.name = "Name is too short";
          }

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ) {
            errors.email = "Email is invaid";
          }

          if (!values.password) {
            errors.password = "Required";
          } else if (
            !values.password.match(
              /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
            )
          ) {
            errors.password = "Password is too simple";
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
          } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords dont match";
          }

          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine }) => (
            <div className="form-registration">
                <form onSubmit={handleSubmit}>
                    <h1 className="form-title">Form</h1>
                    {Object.entries(this.state.fields).map(([ , fieldState]) => {
                        return (
                            <Field
                                key={fieldState.name}
                                name={fieldState.name}
                                component={CustomField}
                                label={fieldState.label}
                                type={fieldState.type}
                                placeholder={fieldState.placeholder}
                                autoComplete={fieldState.autoComplete}
                            />
                        );
                    })}

                    <div className="button-conteiner">
                        <button onClick={form.reset} disabled={submitting || pristine}>
                        Reset
                        </button>
                        <button type="submit" disabled={submitting} style={{ marginLeft: 40 }}>
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        )}
      />
    );
  }
}

export default FinalForm;
