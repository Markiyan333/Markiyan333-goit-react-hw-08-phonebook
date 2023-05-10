import styled from 'styled-components';

export const StyledFilter = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledFilterInput = styled.input`
  width: 150px;
  height: 35px;
  margin-left: 20px;
  border-radius: 4px;
  border: solid 2px blue;

  &:hover,
  &:focus {
    box-shadow: 0 0 5px yellow;;
  }
`;

export const StyledFilterItems= styled.button`
  background-color: blue;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  height: 35px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px yellow;;
  }
`;



