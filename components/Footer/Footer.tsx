import React, { Component } from 'react';
import Container from '../Container/Container';
import styles from './footer.module.module.scss';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterTop from './FooterTop/FooterTop';

class Footer extends Component {
    render() {
        return (
            <footer className={"py-16 bg-[#f1f1f1]"}>
                 <Container>
                    <FooterTop />
                    <FooterBottom />
                 </Container>
            </footer>
        )
    }
}

export default Footer;