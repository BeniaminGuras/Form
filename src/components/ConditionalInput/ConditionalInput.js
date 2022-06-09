
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
        isValid(e.target.value, states.setNoOfSlices);
    }

    const diameterChange = e => {
        isValid(e.target.value, states.setDiameter);
    }

    const spicinesssScaleChange = e => {
        states.setSpicinessScale(e.target.value);
    }

    const slicesOfBreadChange = e => {
        isValid(e.target.value, states.setSlicesOfBread);
    }


    if(props.dish === 'Pizza'){
        
        return(
            <div>
                <div>
                    <p>Number of Slices:</p>
                    <input type="number" value={states.noOfSlices} onChange={noOfSlicesChange} ></input>
                </div>
                <div>
                    <p>Diameter:</p>
                    <input type="number" step='0.1' value={states.diameter} onChange={diameterChange}></input>
                </div>
            </div>
        )
    } else if (props.dish === 'Soup'){

        return(
            <div>
                <p>Spiciness scale(from one to ten): </p>
                <input type="range" min="1" max="10" value={states.spicinessScale} onChange={spicinesssScaleChange}></input>
                <p>The scale is setup for: <span>{states.spicinessScale}</span></p> 
            </div>
        )
    } else if (props.dish === 'Sandwich'){

        return(
            <div>
                <p>Slices of bread:</p>
                <input type='number' value={states.slicesOfBread} onChange={slicesOfBreadChange}></input>
            </div>
        )
    }
}

export default ConditionalInput;
