import SectionHeading from 'components/Utility/SectionHeading';
import SubHeading from 'components/Utility/SubHeading';
import React from 'react';
import Container from '../../../components/Container/Container';
import WorkPartner from '../../../components/WorkPartner/WorkPartner';
import classes from './styles.module.scss';
const SectionClients = (props) => {

    return (
        <section className="text-center py-32">
            <Container>
                <SectionHeading>
                    We work with amazing companies
                </SectionHeading>
                <SubHeading>Companies who used the products developed by us or utilized our strategy, design & development services.</SubHeading>
                <WorkPartner sectionclients={props.sectionclients} />
            </Container>
        </section>
    )
}

export default SectionClients
