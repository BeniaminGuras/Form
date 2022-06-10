import styles from './PopUpWindow.module.scss';
import clsx from 'clsx';

const PopUpWindow = props => {


  const onClick = () => {
  props.setError(false);
  }
  
  return(
    <div className={clsx(styles.modal, props.error === true && styles.active)}>
      <div className={styles.modalHeader}>
        <div className={styles.header}>
          <h1>Invalid Submit</h1>
        </div>
        <div className={styles.icon}>
          <i className="fa-solid fa-x" onClick={onClick}></i>
        </div>
      </div>
      <div className={styles.modalBody}>
        <p>{props.errorMessage}</p>
        <button onClick={onClick}>Close</button>
      </div>
    </div>
  )
}

export default PopUpWindow;