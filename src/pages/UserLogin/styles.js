import styled from "styled-components";

export const Container = styled.div`
`;
export const LoginWrapper = styled.form`
  width: 400px;
  height: 400px;
  border-radius: 2px;
  display: flex;
  margin: 5% auto;
  padding: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100%;
    height: auto;
  }

  p {
    font-size: 9pt;
    align-self: flex-start;
    margin: 10px 0 -8px 10px;
  }
`;
export const LoginInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 10px;
  border-radius: 2px;
  outline: none;
  background-color: transparent;
  border: 2px solid var(--accent-color);
`;
export const CreateAccountButton = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 2px;
  outline: none;
  font-weight: 900;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: rgba(53, 53, 53, 0.3);
  }
`;
export const LoginButton = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 8px;
  border-radius: 2px;
  outline: none;
  font-weight: 900;
  color: white;
  background-color: var(--accent-color);
  border: none;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: var(--accent-color-hover);
  }
`;
