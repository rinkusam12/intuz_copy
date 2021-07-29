import React from 'react';
import classes from './styles.module.scss';

const FormButton = (props) => {
    const variation = props.variation;
    return(
        <div className={`col-12 ${classes.FormButton} ${classes[variation]} ${props.className}`}>
            <button disabled={!props.isValid} type='submit'>{props.submitBtn}</button>
            {props.btnText ? (<button onClick={props.onReset} type="reset">{props.btnText}</button>) : ('')}
        </div>
    )
}

export default FormButton;