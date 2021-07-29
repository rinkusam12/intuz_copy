import Link from "next/link";
import React from "react";
import classes from "./styles.module.scss";

interface LinkButtonProps {
  variation?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  title?: string;
  as?: string;
  target?: string;
  rel?: string;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  // let variation = variation

  let link = (
    <a
      target={props.target}
      rel={props.rel}
      className={`${classes.LinkButton} ${classes[props.variation]} ${props.className ? props.className : ""
        }`}
      href={props.href}
      onClick={props.onClick}
      title={props.title}
      style={props.style}
    >
      {props.children}
    </a>
  );
  if (props.href !== undefined) {
    link = (
      <Link href={props.href} as={props.as} prefetch={false}>
        <a
          target={props.target}
          rel={props.rel}
          className={`${classes.LinkButton} ${classes[props.variation]} ${props.className ? props.className : ""
            }`}
          onClick={props.onClick}
          title={props.title}
          style={props.style}
        >
          {props.children}
        </a>
      </Link>
    );
  }

  return <>{link}</>;
};

export default LinkButton;
