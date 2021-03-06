import React from "react";
import { useFormik } from "./hooks/useFormik";
import isValidEmail from "./utils/isValidEmail";

function App() {
  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
    validate: function validate(values) {
      const errors = {};

      if (!isValidEmail(values.userEmail)) {
        errors.userEmail = "Please, insert a valid e-mail";
      }

      if (values.userPassword.length < 8) {
        errors.userPassword = "Please, insert a valid password";
      }

      return errors;
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="formField">
        <label htmlFor="userEmail">E-mail:</label>
        <input
          type="text"
          placeholder="email@example.com"
          name="userEmail"
          id="userEmail"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.userEmail}
        />
        {formik.touched.userEmail && formik.errors.userEmail && (
          <span className="formField__error">{formik.errors.userEmail}</span>
        )}
      </div>

      <div className="formField">
        <label htmlFor="userPassword">Password:</label>
        <input
          type="password"
          placeholder="Your secret password"
          name="userPassword"
          id="userPassword"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.userPassword}
        />
        {formik.touched.userPassword && formik.errors.userPassword && (
          <span className="formField__error">{formik.errors.userPassword}</span>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default App;
