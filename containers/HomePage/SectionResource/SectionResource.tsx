import SectionHeading from 'components/Utility/SectionHeading';
import SubHeading from 'components/Utility/SubHeading';
import React from 'react';
import Container from '../../../components/Container/Container';
import Resources from '../../../components/Resources/Resources';
import LinkButton from '../../../components/UI/LinkButton/LinkButton';
import classes from './styles.module.scss';
const SectionResource: React.FC<{ heading?:string; sub_heading?:string;  sectionresources: any; disableViewMore?:boolean }> = (props) => {
    //setOpacity(`.resourceHeading, .resourceSecondary`);


    let sectionresources = props.sectionresources && props.sectionresources.map((obj) => {
        obj.image = obj.resourceBlockImage ? obj.resourceBlockImage : obj.image;
        return obj;
    });


    return (
        <section className="py-32">
            <Container>
                <div className='text-center'>
                    {props.heading && <SectionHeading>{props.heading}</SectionHeading>}
                  {props.sub_heading &&  <SubHeading>{props.sub_heading}</SubHeading>}
                </div>

                <Resources sectionresources={sectionresources} />
                {!props.disableViewMore &&
                    <div className='flex justify-center m-12 '>
                        <LinkButton variation="blackBorder" href="/resources">View More</LinkButton>
                    </div>}

            </Container>
        </section>
    )
}

export default SectionResource
