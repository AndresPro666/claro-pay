import React from 'react';
import { Col, Container } from "../../Common/Grid/Index";
import notFoundImage from '../../img/notFound.svg';
import Title from '../../Components/Title';
import Media from '../../Components/Media';

const NotFoundPage = () => (
    <Container>
        <Col size={4}/>
        <Col size={4}>
            <Media
                name="logo-app"
                uri={notFoundImage}
            />
            <Title align="center" title="Error 404"/>
            <Title align="center" title="La pagina no existe"/>
        </Col>
        <Col size={4}/>
    </Container>
);

export default NotFoundPage;
