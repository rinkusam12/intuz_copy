import gsap from 'gsap';
import React, { Component } from 'react';
import { cdn } from '../../config/cdn';
import Block from './ServiceBlock/Block';


interface ServiceProps {
    sectionservices?: ServiceImageProp[];

}

interface ServiceImageProp {
    id: string;
    name: string;
    image: {
        name: string;
    };
    title: string;
    link: string;
}

export default class Service extends Component<ServiceProps, {}> {


    componentDidMount = () => {
        gsap.set(`.serviceblock`, { opacity: 1 });
    };



    render() {
        return (
            <div className="mt-24">
                <div className="grid gap-4 md:gap-20 sm:grid-cols-2 md:grid-cols-4">
                    {this.props.sectionservices.map(ss => (
                        <Block
                            className="serviceblock"
                            key={ss.id}
                            imgSrc={ss.image.name}
                            alt={ss.title}
                            title={ss.title}
                            link={ss.link}
                        />
                    ))}
                </div>

            </div>
        )
    }
}
