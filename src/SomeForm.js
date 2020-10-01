import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const SomeForm = () => {
  const { register, formState } = useForm({
    mode: "onChange",
  });

  return <input name="name" aria-invalid={!formState.isValid} ref={register({ required: true })} />;
};

export default SomeForm;
