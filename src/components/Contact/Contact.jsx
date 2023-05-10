import PropTypes from 'prop-types';
import {
  StyledContacts,
  StyledButton,
  StyledName,
  StyledNumber,
} from './Contact.styled';
import { useDeleteContactMutation } from 'redux/servises/contactApi';


export const Contact = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <StyledContacts>
      <StyledName>{name}: </StyledName>
      <StyledNumber>{number} </StyledNumber>
      <StyledButton
        onClick={() => {
          deleteContact({ id, name });
        }}
      >
        Delete
      </StyledButton>
    </StyledContacts>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
