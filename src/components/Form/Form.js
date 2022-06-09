
import ConditionalInput from "../ConditionalInput/ConditionalInput";
import styles from './Form.module.scss';
import useForm from "./useForm";
import {PIZZA, SOUP, SANDWICH} from '../../consts';

const Form = () => {

    const form = useForm(); 

    return(
        <div className={styles.formContainer}>
            <form onSubmit={form.onSubmit}>
                <div className={styles.formOpiton}>
                    <p className={styles.title}>Name:</p>
                    <input type='text' value={form.name} onChange={e => form.setName(e.target.value)}></input>
                </div>
                <div className={styles.formOpiton}>
                    <p className={styles.title}>Preparation Time:</p>
                    <input type='time' value={form.duration} onChange={e => form.setDuration(e.target.value)} step="1"></input>
                </div>
                <div className={styles.formOpiton}>
                    <p className={styles.title}>Type:</p>
                    <select onChange={e => {
                        form.setDish(e.target.value);
                        form.resetAllConditionalValues();
                    }}>
                        <option value={PIZZA}>{PIZZA}</option>
                        <option value={SOUP}>{SOUP}</option>
                        <option value={SANDWICH}>{SANDWICH}</option>
                    </select>
                </div>
                    <ConditionalInput dish={form.dish} states={form.conditionalStates} />
                    <div className={styles.buttonContainer}>
                        <button type="submit">Submit</button>
                    </div>
            </form>
        </div>
    )
}

export default Form;