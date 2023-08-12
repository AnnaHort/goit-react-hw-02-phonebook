export const ContactList = ({contact}) => {
    return (
        <ul>
          {contact.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.contacts}
            </li>
          ))}
        </ul>
    )
}