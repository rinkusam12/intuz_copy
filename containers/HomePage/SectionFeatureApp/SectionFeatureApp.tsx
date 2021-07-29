
import Container from 'components/Container/Container';
import SectionHeading from 'components/Utility/SectionHeading';
import SubHeading from 'components/Utility/SubHeading';
import React from 'react';
import FeatureApp from '../../../components/FeatureApp/FeatureApp';
import styles from '../homeCommonStyle.module.scss';

const SectionFeatureApp = (props) => {

    //setOpacity(`.featureHeading, .featureSecondary`);

    return (
        // <VisibilityWrapper tween={tl}>
        <section className={`py-32 text-center bg-back-light`}>
            <Container>
                <SectionHeading>Featured App</SectionHeading>
                <SubHeading>Live4It Locations - Find & Host Sports and Events</SubHeading>
                <FeatureApp className="mt-32" />
            </Container>
        </section>
    )
}

export default SectionFeatureApp