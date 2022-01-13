import React, { FunctionComponent } from 'react';
import { Col, Container } from "../../Common/Grid/Index";
import Icon from "../../Components/Icon";
import Badged from "../../Components/Badged";
import {ITEM_TYPES, STRINGS, ICONS, COLORS} from "../../Constants"
import {Row, CommonString, AcceptValue, VerticalBar} from '../../Styles/detailShowList/listItem';

interface MenuItemInterface {
    name: string;
    value: string;
    itemType?: string
};
const MenuItem: FunctionComponent<MenuItemInterface> = ({
    name,
    value,
    itemType
}) => {
    return (
        <Row>
            <Container>
                <Col size={6}>
                    <>
                        <VerticalBar marginRight={!value && '28px'} color={value ? COLORS.GREEN : COLORS.GREY}>
                            |
                        </VerticalBar>
                        {value && <Icon size="fa-xs" name={ICONS.CHECK} color={COLORS.GREEN} />}
                        {name}
                    </>
                </Col>
                {value && !itemType &&
                    <Col size={6}>
                        <CommonString>
                            {value}
                        </CommonString>
                    </Col>
                }
                {value && itemType === ITEM_TYPES.PIN && 
                    <Col size={6}>
                        <CommonString>
                            **** <Icon name={ICONS.INFO} color={COLORS.BLUE} />
                        </CommonString>
                    </Col>
                }
                {itemType === ITEM_TYPES.VERIFY &&
                    (<Col size={6}>
                        {value ?
                         (<Badged text="Verify" backColor={COLORS.GREEN} color={COLORS.WHITE} icon={ICONS.VERIFY} />)
                        :
                        (<CommonString> {STRINGS.NOT_VERIFY} </CommonString>)
                        }
                    </Col>)
                }
                {itemType === ITEM_TYPES.ACCEPT &&
                    (<Col size={6}>
                        {value ? 
                        (<AcceptValue> {STRINGS.ACCEPT} </AcceptValue>) 
                        :
                        (<CommonString> {STRINGS.NOT_LOAD} </CommonString>)
                        }
                    </Col>)
                }
            </Container>
        </Row>
    )
}

export default MenuItem;