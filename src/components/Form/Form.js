import { useState } from "react";
import ConditionalInput from "../ConditionalInput/ConditionalInput"

const Form = () => {

    const [name, setName] = useState('');
    const [duration, setDuration] = useState('00:00:00');
    const [dish, setDish] = useState('Pizza');
    const [noOfSlices, setNoOfSlices] = useState(1);
    const [diameter, setDiameter] = useState(20);
    const [spicinessScale, setSpicinessScale] = useState(1);
    const [slicesOfBread, setSlicesOfBread] = useState(1);

    const conditionalStates = {
        noOfSlices: noOfSlices,
        setNoOfSlices: setNoOfSlices,
        diameter: diameter,
        setDiameter: setDiameter,
        spicinessScale: spicinessScale,
        setSpicinessScale: setSpicinessScale,
        slicesOfBread: slicesOfBread,
        setSlicesOfBread: setSlicesOfBread,
    }

    const resetAllConditionalValues= () => {
        setNoOfSlices(1);
        setDiameter(0.1);
        setSpicinessScale(1);
        setSlicesOfBread(1);
    }

    const submitHolder = e => {
        e.preventDefault();

        let valid = true; 

        const payload = {
            name: name,
            preparation_time: duration,
            type: dish,
        }

        if (dish === 'Pizza') {
            payload.no_of_slices = noOfSlices;
            payload.diameter = diameter;
        } else if (dish === 'Soup') {
            payload.spiciness_scale = spicinessScale;
        } else if (dish === 'Sandwich') {
            payload.slices_of_bread = slicesOfBread;
        }


        for (let data in payload) {
            if (payload[data] === null || payload[data] === '') {
                valid = false; 
            }
        }

        if (valid) {
            console.log(payload);
        } else {
            alert('Wszystkie pola musza byc uzupelnione');
        }
    } 

    return(
        <div>
            <form onSubmit={submitHolder}>
                <div>
                    <p>Name:</p>
                    <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                </div>
                <div>
                    <p>Preparation Time:</p>
                    <input type='time' value={duration} onChange={e => setDuration(e.target.value)} step="1"></input>
                </div>
                <div>
                    <p>Type:</p>
                    <select onChange={e => {
                        setDish(e.target.value);
                        resetAllConditionalValues();
                    }}>
                        <option value="Pizza">Pizza</option>
                        <option value="Soup">Soup</option>
                        <option value="Sandwich">Sandwich</option>
                    </select>
                </div>
                    <ConditionalInput dish={dish} states={conditionalStates} />
                    <button type="submit">Jakis tam button</button>
            </form>
        </div>
    )
}

export default Form;