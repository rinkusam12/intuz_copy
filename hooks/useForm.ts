import { useState } from "react";
import checkValidity from "../config/checkValidity";
import axios from "axios";
import Router from "next/router";

export function useForm() {
  const [processing, setProcessing] = useState(false);
  const [files, setFiles] = useState(false);
  const [form, setForm] = useState({
    fields: {
      f_name: {
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },

      l_name: {
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },

      email: {
        value: "",
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
      },

      phone: {
        value: "",
        validation: {
          required: true,
          phone: true,
        },
        valid: false,
        touched: false,
      },

      project_brief: {
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  });

  return [form, setForm, processing, setProcessing, files, setFiles];
}

export function validator(event, id, form, setForm) {
  //     // props.ss(event, id);
  const updatedForm = {
    ...form.fields,
  };
  const updateFormElement = { ...updatedForm[id] };
  updateFormElement.value = event.target.value;
  updateFormElement.valid = checkValidity(
    updateFormElement.value,
    updateFormElement.validation
  );
  updateFormElement.touched = true;
  updatedForm[id] = updateFormElement;

  let formIsValid = true;
  for (const id in updatedForm) {
    formIsValid = updatedForm[id].valid && formIsValid;
  }

  setForm({
    fields: updatedForm,
    formIsValid: formIsValid,
  });
}

export function reset(form, setForm) {
  //     // props.ss(event, id);
  const updatedForm = {
    ...form.fields,
  };

  let formIsValid = false;
  for (const id in updatedForm) {
    updatedForm[id].valid = false;
    updatedForm[id].value = "";
    updatedForm[id].touched = false;
  }

  setForm({
    fields: updatedForm,
    formIsValid: formIsValid,
  });
}

export async function SubmitForm(data, setProcessing, pathname) {
  let path = "/success/thankyou";
  if (pathname.length > 0) {
    path = `/success/${pathname}`;
  }
  await axios
    .post("https://strapimail-prod-aws.intuz.com/mail", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((suc) => {
      Router.push({
        pathname:path,
      });
      console.log(suc);
      setTimeout(() => {
        setProcessing(false);
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      setProcessing(false);
    });
}
