import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { styled } from "styled-components";

export const AuthWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled(InputText)`
  border: none;
  border-radius: 0;
  box-shadow: none;
  border-bottom: 2px solid #eef2f5;
  width: 460px;
  background: #fafafa;
  color: var(--, #b8b8b8);
  padding: 10px;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 119.048% */
`;
export const StyledButton = styled(Button)`
  color: #fff;
  width: 460px;
  height: 54px;
  border-radius: 10px;
  background: #5d59ec;
  border: none;
  text-align: center;
  display: block;
  /* desktop/ПК-secondary-header */

  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 119.048% */
`;
export const StyledTextTittle = styled.h1`
  color: #000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px; /* 100% */
  letter-spacing: 2.4px;
  margin: 0;
`;
export const StyledTextSubTittle = styled.h2`
  color: var(--, #5d59ec);
  /* desktop/Accent-text */

  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 58px; /* 120.833% */
  margin: 0;
`;
