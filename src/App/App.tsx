import React, {
  useEffect,
  useReducer,
  FunctionComponent,
  useMemo
} from "react";
import client from "../Api";
import Provider from "./context";
import Router from "./Router";
import { store } from '../Core/store';
import { home } from '../Core/Reducer/home';
import { ADD_INITIAL_VALUE } from '../Core/Types';
import { Col, Container } from "../Common/Grid/Index";
import { MenuMock, items } from '../Mocks';
import { IdentifyType } from '../utils/getIdentifyType';
import { claroPayQuery } from "../Api/querys";
import Menu from "../Components/MenuNavBar";


const App: FunctionComponent = () => {
  const [state, dispatch] = useReducer(home, store);
  const indentifyType = IdentifyType(window.location.pathname.replace('/', ''));
  console.log(indentifyType, 'indentifyType')
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
            searchDetail: {
              items
            }
          },
        })
      });
  }, [state.action])

  return (
    <Provider value={{ dispatch, state }}>
      <Container>
        <Col size={1} styleString="margin-right: 2rem; width: 55px !important; background-color: white">
          <Menu item={state?.menu?.items} last={state?.menu?.last} />
        </Col>
        <Col size={11}>
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