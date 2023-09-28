import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: "string";
  firstName: "string";
  lastName: "string";
  username: "string";
  password: "string";
  password1: "string";
  extraError?: "string";
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Passwords are not the same" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "Server offline" });
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstName", {
            required: "First name is required",
            validate: {
              noJJ: (value) => (value.includes("jj") ? "no jj allowed" : true),
            },
          })}
          placeholder="First Name"
        />

        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: "Last name is required" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message as string}</span>
        <input
          {...register("username", {
            required: "User name is required",
            minLength: {
              value: 4,
              message: "Your username is too short",
            },
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message as string}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message as string}</span>
        <input
          {...register("password1", {
            required: "Password1 is required",
            minLength: {
              value: 5,
              message: "Your password1 is too short",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message as string}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message as string}</span>
      </form>
    </div>
  );
}

export default ToDoList;
