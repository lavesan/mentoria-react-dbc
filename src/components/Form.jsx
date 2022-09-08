import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { EMAIL, MIN_4, REQUIRED } from "../helpers/validation.helper";
import { addressService } from "../services";

const schemaValidation = yup.object({
  name: yup.string().required(REQUIRED).min(4, MIN_4),
  email: yup.string().required(REQUIRED).email(EMAIL),
  cep: yup.string().required().min(8),
});

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      cep: "",
    },
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = handleSubmit((form) => {
    console.log("form: ", form);
    addressService.findByCep(form.cep).then((res) => {
      console.log("res: ", res);
    });
  });

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexFlow: "column wrap" }}
    >
      <input
        placeholder="Nome"
        // disabled={register('name').disabled}
        // value={register('name').value}
        // onChange={register('name').onChange}
        {...register("name")}
      />
      <p className="error">{errors.name && errors.name.message}</p>
      <input placeholder="E-mail" {...register("email")} />
      <p className="error">{errors.email && errors.email.message}</p>
      <input placeholder="CEP" {...register("cep")} />
      <p className="error">{errors.cep && errors.cep.message}</p>
      <button type="submit">Submeter</button>
    </form>
  );
};
