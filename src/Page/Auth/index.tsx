import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthWrapper, StyledButton, StyledInput, StyledTextSubTittle, StyledTextTittle } from "./AuthPage.styled";
// import { authUsers } from "@/request";

export const AuthPage = () => {
  const [identifier, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toggler, setToggler] = useState<boolean>(true);
  const [isValid, setIsValid] = useState(true);
  const [passwordToggler, setPasswordToggler] = useState<boolean>(true);

  useEffect(() => {
    //  throwUserData();
  }, [toggler]);

  //   const throwUserData = async () => {
  //     try {
  //       const userData = await authUsers({
  //         identifier,
  //         password,
  //       });
  //       console.log(userData);
  //       // router.push("/");
  //       // localStorage.setItem(
  //       //   "key",
  //       //   "bfa0f4acbd2c75b6397d8eed76fee69426c4da3de1cd19c020d62ba3653c57b126fb6f55a3dda5191217bd15792776540fbc3edd475fe64d5e74f41ec4b7b51d7d82381067a9cb94451824264d7906070e06a3d7f3e33e3f2c8628831095543dc318787f6fc80e372284f9318b4d3dc257af398241757312a41c59de6868cc37"
  //       // );
  //       setIsValid(true);
  //     } catch (error) {
  //       setIsValid(false);
  //       console.error("Произошла ошибка при выполнении запроса:", error);
  //     }
  //   };

  const changeToggler = () => {
    setToggler(!toggler);
  };
  //   const showPassword = () => {
  //     setPasswordToggler(!passwordToggler);
  //   };

  return (
    <>
      <AuthWrapper>
        <StyledTextTittle>tnbmar</StyledTextTittle>
        <StyledTextSubTittle>Админка</StyledTextSubTittle>
        <StyledInput
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Введите логин"
        ></StyledInput>
        <StyledInput
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Введите пароль"
        ></StyledInput>
        {!isValid ? <p>Неправильно введен логин или пароль</p> : " "}
        <StyledButton onClick={changeToggler}>Войти</StyledButton>
      </AuthWrapper>
    </>
  );
};

export default AuthPage;
