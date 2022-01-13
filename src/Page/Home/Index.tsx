import React, { FunctionComponent, useContext } from 'react'
import { Col, Container } from "../../Common/Grid/Index";
import { CONTEXT } from '../../App/context';
import Menu from "../../Components/MenuNavBar";
import Form from "../../Components/Form";

const FormList = [
    {
        type: 'number',
        value: '',
        label: 'Lorem ipsum',
        placeholder: '00.000.00',
        name: 'doc',
    },
    {
        type: 'email',
        value: '',
        label: 'Lorem ipsum',
        placeholder: 'gmail@gmail.com',
        name: 'email',
    },
];

const formFunctionHandler = ({doc, email}: any) : any => {
    console.log(doc.value);
    console.log(email.value);
}

const Home: FunctionComponent = () => {
    const {
        state,
        dispatch,
    }: any = useContext(CONTEXT);

    return (
        <Container>
            <Col size={3}/>
            <Col size={6}>
                <Form list={FormList} colSize={6} callback={formFunctionHandler}/>
            </Col>
            <Col size={3}/>
        </Container>
    )
}

export default Home;

