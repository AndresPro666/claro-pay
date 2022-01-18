import React, { FunctionComponent } from "react";
import { Col, Container, Element, HorizontalDivisor } from "../../Common/Grid/Index"
import { switchData } from "./switchData"


interface DisplayUser {
    user: any[];
};

const DisplayInfo: FunctionComponent<DisplayUser> = ({ user }) => {

    return (
        <Container>
            {user && user.map((user) =>
                <Col size={user?.col}>
                    <Element>
                        {switchData(user)}
                    </Element>
                </Col>
            )}
        </Container>
    )
}

export default DisplayInfo;

