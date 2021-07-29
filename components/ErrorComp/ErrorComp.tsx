// import Image from 'next/image';
import React from 'react';
import Layout from '../Layout/Layout';
import LinkButton from '../UI/LinkButton/LinkButton';
import classes from './styles.module.scss';
const ErrorComp = (props) => {
    return (
        <Layout whiteBackground>
            <div className={classes.Error}>
                {/* <Image width={300} height={300} layout="fixed" src={"/static/oops.svg"} alt="Oops"/> */}
                <h3>{props.statusMessage}</h3>
                <p>{props.description}</p>
                <LinkButton variation="purpleBtn" href="/">GO TO HOME PAGE</LinkButton>
            </div>
        </Layout>
    )
}

export default ErrorComp
