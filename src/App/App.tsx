import React, {
  useEffect,
  useReducer,
  FunctionComponent,
  useMemo
} from "react";
import client from "../Api/Index";
import Provider from "./context";
import Router from "./Router";
import { store } from '../Core/store';
import { home } from '../Core/Reducer/home';
import { ADD_INITIAL_VALUE } from '../Core/Types';
import { Col, Container } from "../Common/Grid/Index";
import { MenuMock, items, userMockClaroPay, UserMock } from '../Mocks';
import { IdentifyType } from '../utils/getIdentifyType';
import { claroPayQuery } from "../Api/querys";
import Menu from "../Components/MenuNavBar";


const App: FunctionComponent = () => {
  const [state, dispatch] = useReducer(home, store);
  const indentifyType = IdentifyType(window.location.pathname.replace('/', ''));

  useEffect(() => {
    client.query(
      claroPayQuery('phoneNumber', '1123423423')
    )
      .then(({ data }) => {
        dispatch({
          type: ADD_INITIAL_VALUE,
          value: {
            ...MenuMock,
            ...data,
            userMockClaroPay,
            UserMock,
            searchDetail: {
              items
            }
          },
        })
      });
  }, [state.action])
  console.log(state);
  return (
    <Provider value={{ dispatch, state }}>
      <Container>
        <Col size={1} styleString="margin-right: 2rem; width: 55px !important; background-color: white">
          <Menu {...state?.menu} />
        </Col>
        <Col size={10}>
          {
            useMemo(() => {
              return <Router />
            }, [])
          }

        </Col>
      </Container>
    </Provider>
  );
}

export default App;