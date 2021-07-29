import React, { Component } from 'react';
import styles from './footerlist.module.module.scss';
import BuildList from './ListMeta/BuildList';

const serviceList = [
            {title:'Mobile App Development', link:"/custom-app-development"}, 
            // {title:'Cloud Solutions', link:"https://cloud.intuz.com", externalurl: true},
            {title:'Web Applications', link:"/enterprise"},
            // {title:'App Marketing', link:"/app-marketing"},
            {title:'Artificial Intelligence', link:"/ai"},
            {title:'Blockchain Development', link:"/blockchain"},
            {title:'Internet of Things', link: "/iot-application-development"},
            {title:'Rapid Application Development', link: "/rapid-application-development"},
            {title:'App Marketing', link: "/app-marketing"}
                ];
        const solutionList = [
            {title:'Taxi App', link:"/taxi-app-development"}, 
            {title:'Food Delivery App', link:"/food-delivery-app-development"}, 
            {title:'Education & E-Learning', link: "/education-elearning-app-development"},
            {title:'App Marketing Packages', link: "/app-marketing-packages"},
            {title:'Cloud Computing', link: '/cloud', externalurl: true}
        ];
        const techList = [
            {title:'React Native Development', link:"/react-native-development"}, 
            {title:'React JS Developers', link:'/react-js-development'}, 
            {title:'Node JS Developers', link:'/node-js-development'}, 
            {title:'Full Stack JS', link:"/full-stack-js-development"}, 
            {title:'Devops', link: "/agile-devops-services"},
            {title:'JamStack Development', link: "/jam-stack-development"}];
        const companyList = [
            // {title:'about', link:"/about"}, 
            {title:'work', link:"/work"}, 
            {title: 'labs', link:'/labs'},
            {title:'Why us', link:"/why-us"},
            {title:'Our Accreditations', link:"/awards-associations"}, 
            {title: 'Blog', link: '/blog'},
            {title:'Resources', link:'/resources'},
            {title:'knowledge Base', link:'/knowledge-base'},
            // {title:'process', link:"/process"}, 
            // {title:'labs', link: "/labs"}, 
            // {title:'CLIENTS SPEAK', link: "/clients-speak"}, 
            // {title:'RESOURCES', link:'/resources'},
            ];
        const reachList = [{title:'Get Started', link:"/get-started"}, {title:'partner with us', link:"/partner-with-us"}, {title:'Hire Dedicated Developers', link: "/hire-app-developers"},{title:'Contact us', link:"/contactus"}, {title:'careers', link: "/careers"}];





export default class FooterList extends Component {
    render() {

        
        return (
            <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-10`}>   
                <BuildList 
                    metaTitle='services'
                    metaList={serviceList}
                />
                <BuildList 
                    metaTitle='solutions'
                    metaList={solutionList}
                />
                <BuildList 
                    metaTitle='technologies'
                    metaList={techList}
                />
                <BuildList 
                    metaTitle='company'
                    metaList={companyList}
                />
                <BuildList 
                    metaTitle='reach us'
                    metaList={reachList}
                />
            </div>
        )
    }
}