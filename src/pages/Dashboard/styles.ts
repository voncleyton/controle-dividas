import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IListItemProps {
  enabled: boolean;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #151c4e;
  top: 0;
  width: 100%;
  height: auto;

  padding: 30px;
  color: #ffffff;
  font-size: 30px;
  letter-spacing: -0.88px;

  button {
    width: 200px;
    height: 50px;

    background-color: #0c9;
    font-weight: bold;
    color: #fff;
    border-radius: 25px;
    text-align: center;
    border: none;
    padding: 5px;

    @media (hover: hover) {
      transition: background-color 0.3s;

      &:hover {
        background-color: ${shade(0.3, '#0C9')};
      }
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
    justify-content: flex-end;
    button {
      width: 100%;
      margin-top: 15px;
    }
  }
`;

export const UsersList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 50px 25px 50px;
`;

export const ListItem = styled.div<IListItemProps>`
  display: flex;
  flex: 1;
  margin-top: 15px;
  background-color: #ffffff;
  border-radius: 15px;
  width: 100%;
  max-width: 720px;

  ${props =>
    !props.enabled &&
    css`
      pointer-events: none;
    `}

  a {
    text-decoration: none;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 15px;
    color: #000;

    strong {
      color: #333;
      font-weight: bold;
    }

    span {
      color: #777;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;

    background-color: transparent;
    color: #cc0033;
    border: none;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;

    @media (hover: hover) {
      transition: background-color 0.6s;

      &:hover {
        background-color: #cc0033;
        color: #ffffff;
      }
    }
  }

  @media (hover: hover) {
    transition: transform 0.2s;

    &:hover {
      transform: translatex(10px);
    }
  }
`;
