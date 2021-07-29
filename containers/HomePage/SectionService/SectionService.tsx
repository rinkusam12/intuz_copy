import SectionHeading from 'components/Utility/SectionHeading';
import SubHeading from 'components/Utility/SubHeading';
import React from 'react';
import Container from '../../../components/Container/Container';
import Service from '../../../components/Services/service';
const SectionService = (props) => {


    return (
        <section className="py-32 text-center bg-[#f1f1f1]">
            <Container>
                <SectionHeading>Services We Offer</SectionHeading>
                <SubHeading>Concept. UI/UX. Code. Test. Launch. Market. Upgrade</SubHeading>
                <Service sectionservices={props.sectionservices} />
            </Container>
        </section>
    )
}

export default SectionService

