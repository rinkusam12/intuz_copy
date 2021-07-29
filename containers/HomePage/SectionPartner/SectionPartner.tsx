import SectionHeading from 'components/Utility/SectionHeading';
import React from 'react';
import Container from '../../../components/Container/Container';
import LinkButton from '../../../components/UI/LinkButton/LinkButton';

const SectionPartner = () => {

    return (
        <section className={"py-32 bg-back-light text-center"}>
            <Container>
                <SectionHeading>Digital Agency? Partner&nbsp;with&nbsp;Intuz</SectionHeading>
                <p className="text-18 leading-normal text-black-6b mt-10">Hire full stack development teams for creating cutting edge web and mobile application.</p>
                <LinkButton href="/partner-with-us" variation="blue">Partner with Us</LinkButton>
            </Container>
        </section>
    )
}

export default SectionPartner