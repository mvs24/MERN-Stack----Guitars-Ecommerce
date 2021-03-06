import React from "react";

export default function FormField(props) {
  const { formdata, change, id } = props;

  let errorMsg = null;
  if (formdata.validation && !formdata.valid) {
    errorMsg = <div className="error_label">{formdata.validationMessage}</div>;
  }

  const renderTemplate = () => {
    let formTemplate = null;
    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div className="formBlock">
            <input
              {...formdata.config}
              onBlur={e => change({ e, id, blur: true })}
              onChange={e => change({ e, id })}
              value={formdata.value}
            />
            {errorMsg}
          </div>
        );

        break;

      default:
        formTemplate = null;
        break;
    }
    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
}
