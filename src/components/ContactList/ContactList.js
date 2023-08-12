export const ContactList = ({ contact, deleteContact }) => {
  return (
    <ul>
      {contact.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.contacts}
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

