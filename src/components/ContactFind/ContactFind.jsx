import PropTypes from 'prop-types';
import css from './ContactFind.module.css'
import { nanoid } from "nanoid";

const inputId = nanoid();

export const ContactFind = () => (
    <>
    <label htmlFor={inputId} className={css.labelForm}>Name</label>
        <input
            id={inputId}
            className={css.labelInput}
            type="text"
            name="find"
            value={find}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
        />
    </>
)

ContactFind.propTypes = {
    find: 
}