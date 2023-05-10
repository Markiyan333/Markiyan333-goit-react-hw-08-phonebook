import { Contact } from 'components/Contact/Contact';

import { StyledContactList, StyledContactWraper } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter, getIsLoading } from '../../redux/auth/selectors';

import ContentLoader from '../ContentLoader/ContentLoader';
import { useFetchContactsQuery } from 'redux/servises/contactApi';

export const ContactList = () => {
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFilter);
  const { data = [] } = useFetchContactsQuery();

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );
  return (
    <StyledContactWraper>
      <StyledContactList>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}

        {isLoading && <ContentLoader />}
      </StyledContactList>
    </StyledContactWraper>
  );
};
