import { useEffect, useState } from "react";

export function useFormik({ initialValues, validate }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setValues({
      ...values,
      [fieldName]: fieldValue,
    });
  }

  function handleBlur(e) {
    const fieldName = e.target.name;
    setTouched({
      ...touched,
      [fieldName]: true,
    });
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    setErrors,
    handleBlur,
    handleChange,
  };
}
