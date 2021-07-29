import React, { useState } from 'react';
import classes from './styles.module.scss';
const BlueCheckBox = (props) => {
    const [checked, setChecked] = useState(false);
    // const playtime = (e) => {
    //     console.log(c);
    //     // c.target.checked;
    // }
    return (
        <div className={`${classes.BlueCheckBox} ${props.containerClass ? props.containerClass : '' }`}>
            <label htmlFor={props.id}>
                    {props.value}
            </label>
           <input type="radio" id={props.id} name={props.name} value={props.value}/>
           <span></span>
        </div>
    )
}

export default BlueCheckBox
