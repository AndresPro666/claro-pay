import React, { FunctionComponent, useContext } from 'react'
import get from 'lodash/get';
import { Col, Container } from "../../Common/Grid/Index";
import { CONTEXT } from '../../App/context';
import Title from '../../Components/Title';
import DisplayInfo from "../../Components/DisplayInfo";
import DetailShowList from '../../Components/DetailShowList';


const Home: FunctionComponent = () => {
    const {
        state,
        dispatch,
    }: any = useContext(CONTEXT);

    return (
        <>
       <div style={{
                backgroundColor: 'white',
                marginTop: '1rem',
                padding: '2rem',
                borderRadius: '15px'
            }}
            >
            <Container>
                <Col size={12}>
                    <DisplayInfo user={state?.userMockClaroPay} />
                </Col>
            </Container>
            </div>
            <div style={{
                backgroundColor: 'white',
                marginTop: '1rem',
                padding: '2rem',
                borderRadius: '15px'
            }}
            >
                <Container>
                    <Col size={12}>
                        <Title title="USUARIO AVANZADO" color="black" size="25px" />
                        <hr />
                        <DetailShowList
                            title="Datos de la cuenta"
                            items={get(state, 'searchDetail.items.accountData')}
                        />
                        <DetailShowList
                            title="Informacion personal del usuario"
                            items={get(state, 'searchDetail.items.personalInformation')}
                        />
                        <DetailShowList
                            title="Datos de la Billetera"
                            items={get(state, 'searchDetail.items.billingData')}
                        />
                    </Col>
                </Container>
            </div>
        </>)
}

export default Home;