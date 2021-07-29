import { myLoader } from 'config/image-loader';
import Image from 'next/image';
import Link from "next/link";
import React from "react";
import styles from "./serviceblock.module.scss";

const Block = (props) => {
  return (
    <div className={`${props.className} ${styles.ServicesBlock}`}>
          <div style={{ height: "100px", width: "80px", position: "relative", margin: "0 auto" }}>
            <Image sizes="5vw" alt="Service Block" layout="fill" loader={myLoader} objectFit="contain" src={props.imgSrc} />
          </div>

          <div>
            <div className={`${styles.ServiceSeparator} flex justify-center `} />
            <h3
              className={styles.titleBlock}
              dangerouslySetInnerHTML={{ __html: props.title }}
            ></h3>

            <h4>
              <Link href={props.link}>
                <a title={props.title}>
                  Learn More <span>{">"}</span>
                </a>
              </Link>
            </h4>
          </div>
    </div>
  );
};

export default Block;
