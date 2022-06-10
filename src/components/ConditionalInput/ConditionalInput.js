import styles from '../Form/Form.module.scss';
import {PIZZA, SOUP, SANDWICH} from '../../consts';

const ConditionalInput = props => {

    const states = props.states; 

    const isValid = (userInput, cb) => {
        if(userInput >= 0){
            cb(userInput);
        } else {
            alert('Value cannot be below or equal 0');
        }
    }
    
    const noOfSlicesChange = e => {  
        isValid(parseInt(e.target.value), states.setNoOfSlices);
    }

    const diameterChange = e => {
        isValid(parseFloat(e.target.value), states.setDiameter);
    }

    const spicinesssScaleChange = e => {
        states.setSpicinessScale(parseInt(e.target.value));
    }

    const slicesOfBreadChange = e => {
        isValid(parseInt(e.target.value), states.setSlicesOfBread);
    }


    if(props.dish === PIZZA){
        
        return(
            <div>
                <div>
                    <p className={styles.title}>Number of Slices:</p>
                    <input type="number" value={states.noOfSlices} onChange={noOfSlicesChange} ></input>
                </div>
                <div>
                    <p className={styles.title}>Diameter:</p>
                    <input type="number" step='0.1' value={states.diameter} onChange={diameterChange}></input>
                </div>
            </div>
        )
    } else if (props.dish === SOUP){

        return(
            <div>
                <p className={styles.title}>Spiciness scale: </p>
                <input type="range" min="1" max="10" value={states.spicinessScale} onChange={spicinesssScaleChange}></input>
                <p>The scale is setup for: <span>{states.spicinessScale}</span></p> 
            </div>
        )
    } else if (props.dish === SANDWICH){

        return(
            <div>
                <p className={styles.title}>Slices of bread:</p>
                <input type='number' value={states.slicesOfBread} onChange={slicesOfBreadChange}></input>
            </div>
        )
    }
}

export default ConditionalInput;
