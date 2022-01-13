import {gql} from "@apollo/client"

export const claroPayQuery = (name: string, value: string) => {
    return {query: gql`
        query Claropay {
          claropay(
            ${name}: "${value}"
          ) {
            uuid
            lastName
            firstName
            documentNumber
            phoneNumber
          }
        }
    `}
}