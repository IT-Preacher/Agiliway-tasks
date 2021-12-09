import moment from "moment";

const validate = (values) => {
  /* first validators */
  const res = moment(
    `${values.date_year}-${values.date_month}-${values.date_day}`,
    "YYYY-MM-DD"
  );
  const errors = {};
  console.log("valid day", values);
  console.log("valid day d", values.date_day);
  console.log("valid day d res", res);

  if (!values.sex) {
    errors.sex = "Required";
  }
  if (!values.date_day || !values.date_month || !values.date_year) {
    errors.birth_date = "Required";
  }
  return errors;
};

export default validate;
