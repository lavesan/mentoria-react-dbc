import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { EMAIL, MIN_4, REQUIRED } from "../helpers/validation.helper";
import { addressService } from "../services";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const reg = /(\d)+|(\w)+/;

const schemaValidation = yup.object({
  nome: yup.string().required(REQUIRED).min(4, MIN_4).matches(reg),
  email: yup.string().required(REQUIRED).email(EMAIL),
  cpf: yup.string().required(REQUIRED).max(11).min(11),
  dataNascimento: yup.string().required(REQUIRED),
});

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      cpf: "",
      dataNascimento: "2022-09-13",
      email: "",
      nome: "",
    },
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = handleSubmit(async (form) => {
    // Utilizando promise
    // Jeito 1
    try {
      const response = await addressService.findByCep(form.cep);
      console.log("response: ", response);
    } catch (err) {
      console.error("err: ", err);
    } finally {
      console.log("passou");
    }

    // Jeito 2
    addressService
      .findByCep(form.cep)
      .then((response) => {
        console.log("response: ", response);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log("passou");
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
        {...register("nome")}
      />
      <p className="error">{errors.name && errors.name.message}</p>
      <input placeholder="E-mail" {...register("email")} />
      <p className="error">{errors.email && errors.email.message}</p>
      <input placeholder="CPF" {...register("cpf")} />
      <p className="error">{errors.cep && errors.cep.message}</p>
      <input placeholder="Data Nascimento" {...register("dataNascimento")} />
      <p className="error">{errors.cep && errors.cep.message}</p>
      <button type="submit">Submeter</button>
    </form>
  );
};
