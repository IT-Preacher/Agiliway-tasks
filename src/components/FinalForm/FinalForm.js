import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import CustomField from "./CustomField";
import "./finalForm.scss";

// const validators = {
//     name: (value = "", allValues) => {
//         return value.length > 2 ? 
//             undefined 
//             : 
//             "Name is too short";
//     },
//     email: (value = "", allValues) => {
//         return  value.length > 10 ? 
//             undefined 
//             : 
//             "Email incorecct";
//     } ,
//     password: (value = "", allValues) => {
//        return value === allValues.confirmPassword && value.length > 8 ? 
//             undefined 
//             : 
//             "Password don't match";
//     },
//     confirmPassword: (value = "", allValues) => {
//         return value === allValues.confirmPassword ? 
//             undefined 
//             : 
//             "Password don't match";
//     },
// };

// const composeValidators = (validators) = (values, allValues) => {
//     let error = undefined;

//     for(let i = 0; i < validators.length; i++){
//         error = validators[allValues](values, allValues);

//         if(error){
//             return error
//         }
//     }
//     return error;
// };

const composeValidators = (validators) => (value, allValues) => { 
    let error = undefined; 
    for (let i = 0; i < validators.length; i++) { 
      error = validators[i](value, allValues); 
      if (error) { 
        return error; 
      } 
    } 
  }; 
 
const commonValidators = { 
  required: (value = "") => { 
    return value.length > 0 ? undefined : "Required"; 
  }, 
 
  sixSymbols: (value, allValues) => { 
    return value.length > 5 ? undefined : "Too short"; 
  }, 
 
  comparePasswords: (value, allValues) => { 
    return allValues.password === allValues.confirm 
      ? undefined 
      : "Password don`t match"; 
  }, 
}; 
 
const validators = { 
  name: composeValidators([commonValidators.required,commonValidators.sixSymbols]), 
  email: composeValidators([commonValidators.required,commonValidators.sixSymbols]), 
  password: composeValidators([commonValidators.required,commonValidators.sixSymbols]), 
  confirmPassword:  composeValidators([commonValidators.required,commonValidators.sixSymbols,commonValidators.comparePasswords]), 
}; 

class FinalForm extends Component {
  state = {
    fields: {
      name: {
        name: "name",
        label: "name",
        type: "text",
        placeholder: "Input name",
        validators: [this.required, this.sixSymbols],
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

//   nameValidator = (value, allValues) => {
//     return value.length > 2 ? 
//             undefined 
//             : 
//             "Name is too short";
//   };

//   emailValidator = (value, allValues) => {
//     return  value.length > 10 ? 
//             undefined 
//             : 
//             "Email incorecct";
//   };

//   passwordValidator = (value, allValues) => {
//     return value === allValues.confirmPassword && value.length > 8 ? 
//             undefined 
//             : 
//             "Password don't match";
//   };

//   confirmPasswordValidator = (value, allValues) => {
//     return value === allValues.confirmPassword ? 
//             undefined 
//             : 
//             "Password don't match";
//   };

//   composeValidators = (validators) = (values, allValues) => {
//     let errors = undefined;

//     for(let i = 0; i < validators.length; i++){
//         errors = validators[allValues](values, allValues);

//         if(errors){
//             return errors
//         }
//     }
//     return console.log(allValues);
//   };

  onSubmit = (props) => {
    console.log(props);
  };

  render() {
    return (
      <Form
        onSubmit={(props) => this.onSubmit(props)}
        // validate={(values) => {
        //   const errors = {};

        //   if (!values.name) {
        //     errors.name = "Required";
        //   } else if (values.name.length < 2) {
        //     errors.name = "Name is too short";
        //   }

        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        //   ) {
        //     errors.email = "Email is invaid";
        //   }

        //   if (!values.password) {
        //     errors.password = "Required";
        //   } else if (
        //     !values.password.match(
        //       /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
        //     )
        //   ) {
        //     errors.password = "Password is too simple";
        //   }

        //   if (!values.confirmPassword) {
        //     errors.confirmPassword = "Required";
        //   } else if (values.confirmPassword !== values.password) {
        //     errors.confirmPassword = "Passwords dont match";
        //   }

        //   return errors;
        // }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <div className="form-registration">
            <form onSubmit={handleSubmit}>
              <h1 className="form-title">Form</h1>
              {Object.entries(this.state.fields).map(([, fieldState]) => {
                return (
                  <Field
                    key={fieldState.name}
                    name={fieldState.name}
                    component={CustomField}
                    label={fieldState.label}
                    type={fieldState.type}
                    validate={validators[fieldState.name]}
                    placeholder={fieldState.placeholder}
                    autoComplete={fieldState.autoComplete}
                  />
                );
              })}

              <div className="button-conteiner">
                <button onClick={form.reset} disabled={submitting || pristine}>
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{ marginLeft: 40 }}
                >
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
