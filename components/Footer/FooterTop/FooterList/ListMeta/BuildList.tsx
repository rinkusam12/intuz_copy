import React from 'react';
import styles from '../footerlist.module.module.scss';
import List from './List';

const BuildList = (props) => {
    return (
        <div className="text-center md:text-left">
            <h6 className={"text-3xl text-[#546c80] font-semibold mb-2 uppercase"}>{props.metaTitle}</h6>
            <ul className="uppercase">
                <List list={props.metaList} />
            </ul>
        </div>
    )
}

export default BuildList;