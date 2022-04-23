import PropTypes from 'prop-types'
import styles from './ContactListItem.module.css'

const ContactListItem = ({id,name,number,onClick}) => {
    return(
        <>
        <span className={styles.NumberContacts}>
            {name}: {number}
        </span>
        <button className={styles.ButtonsContact} type="button" onClick={() => onClick(id)}>
            Delete
        </button>
        </>
    );
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ContactListItem