import {useState} from 'react'
import PropTypes from 'prop-types'
import styles from '../ContactForm/ContactForm.module.css'

const ContactForm = ({onSubmit, contacts}) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
const handleInputChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value)
                break;

            case 'number':
                setNumber(value)
                break;

            default:
                return;
        }
    }
    

const handleSubmit = e => {
    e.preventDefault();
    if(contactExits()){
        alert(`${name} is already in contacts`)
        return;
    }
    onSubmit({name, number});
    setName('');
    setNumber('');
    };
    
    const contactExits = () => contacts.find(contact => contact.name.toUpperCase() === name.toUpperCase() || contact.number === number);

    return(
        <form className={styles.forma} onSubmit={handleSubmit}>
            <div className={styles.blockform}>
            <label htmlFor="" className={styles.LabelForm}>
                <span className={styles.NamesForm}>Name</span>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={handleInputChange}
                    />
            </label>
                
                <label className={styles.LabelForm}>
                <span className={styles.NamesForm}>Number</span>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={handleInputChange}
                    />
                </label>
            </div>
            <button type="submit" className={styles.ButtonsContact}>Add contact</button>
        </form>
    );
  }

  ContactForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
        contacts: PropTypes.array.isRequired,
    }

export default ContactForm;