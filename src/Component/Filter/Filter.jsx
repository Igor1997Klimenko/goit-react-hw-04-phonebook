import PropTypes from 'prop-types'
import styles from './Filter.module.css'

const Filter = ({value, onChange}) => {
    return(
        <label className={styles.LabelForm}>
            <span className={styles.NamesForm}>Find contacts by name</span>
            <input type="text"
                   name="filter"
                   value={value}
                   onChange={onChange} 
            />
        </label>
    );
}


Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter