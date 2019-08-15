export const update = (element, formdata, formName) => {
  const newFormdata = {
    ...formdata
  };
  const newElement = {
    ...newFormdata[element.id]
  };
  newElement.value = element.e.target.value;
  if (element.blur) {
    let validData = validate(newElement, formdata);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
  }
  newElement.touched = element.blur;
  newFormdata[element.id] = newElement;

  return newFormdata;
};

export const validate = (element, formdata = []) => {
  let error = [true, ""];

  if (element.validation.email) {
    let valid = /\S+@\S+\.\S+/.test(element.value);
    let msg = `
    ${!valid ? "Email is invalid" : null}
    `;
    error = !valid ? [valid, msg] : error;
  }

  if (element.validation.required) {
    let valid = element.value.trim() !== "";
    let msg = `
    ${!valid ? "This field is required" : null}
    `;
    error = !valid ? [valid, msg] : error;
  }
  return error;
};

export const generateData = (formdata, formName) => {
  let dataToSubmit = {};

  for (let key in formdata) {
    dataToSubmit[key] = formdata[key].value;
  }
  return dataToSubmit;
};

export const isFormValid = (formdata, formName) => {
  let formValid = true;

  for (let key in formdata) {
    formValid = formdata[key].valid && formValid;
  }
  return formValid;
};
