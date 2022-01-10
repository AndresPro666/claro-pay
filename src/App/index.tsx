import React, {
  useEffect,
  useReducer,
  FunctionComponent,
  useMemo
} from "react";
import {gql} from "@apollo/client"
import client from "../Api"
import Provider from "./context"
import Home from "../Page/Home/Index"

import { store } from '../Core/store'
import {home}  from '../Core/Reducer/home'
import {ADD_INITIAL_VALUE} from '../Core/Types'

import { IdentifyType } from '../utils/getIdentifyType'


const App: FunctionComponent = () => {
  const [state, dispatch] = useReducer(home, store);
  const indentifyType = IdentifyType(window.location.pathname.replace('/', ''));

  useEffect(() => {

    client
    .query({
      query: gql`
        query Claropay {
          claropay(
            phoneNumber: "1123423423"
          ) {
            uuid
            lastName
            firstName
            documentNumber
            phoneNumber
          }
        }
    `
    })
    .then(({data}) => {
      dispatch({
        type: ADD_INITIAL_VALUE,
        value: data,
      })
    });
  }, [state.action])

  return (
    <Provider value={{ dispatch, state }}>
      {
        useMemo(() => {
          return <Home />
        }, [])
      }
    </Provider>
  );
}

export default App;