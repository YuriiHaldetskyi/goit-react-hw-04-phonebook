import { List, Item } from 'components/contacts/contacts.styled';
import { Button } from 'GlobalStyled';
export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <List>
        {contacts.map(contact => {
          return (
            <Item key={contact.id}>
              <p> {contact.name} :</p>
              <p> {contact.number} :</p>
              <Button type="button" onClick={() => onDeleteContact(contact.id)}>
                Delete
              </Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};
