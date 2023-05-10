import styled from 'styled-components';

export const StyledContacts = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  width: 785px;
`;

export const StyledName = styled.span`
  color: #000000;
`;

export const StyledNumber = styled.span`
  color: blue;
  padding-left: 10px;
`;

export const StyledButton = styled.button`
  align-items: center;
  background-color: blue;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 15px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 5px yellow;
  }
`;