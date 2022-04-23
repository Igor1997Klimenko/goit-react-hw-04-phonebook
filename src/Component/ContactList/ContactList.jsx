import PropTypes from 'prop-types'
import ContactListItem from '../ContactsListItem/ContactSListItem'
import s from './ContactList.module.css'


const ContactList = ({contacts, ContactsDelete}) => {
    return(
        <ul className={s.ContactList}>
        {contacts.map(({id, name, number}) => (
        <li key={id}>
            <ContactListItem
                id={id}
                name={name}
                number={number}
                onClick={ContactsDelete}
            />
        </li>          
    ))}
    </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default ContactList