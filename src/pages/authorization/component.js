import React, { useCallback } from "react";
import styles from "./style.module.scss";

export const Authorization = ({signUp}) => {
  const submit = useCallback(() => {
    signUp({
      email: "email",
      password: "password"
    });
  }, []);

  return(
      <>
      <button onClick={submit}>12</button>
      <div>!24254</div>
      </>
  )
};
