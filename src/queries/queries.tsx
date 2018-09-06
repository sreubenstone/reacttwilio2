import { gql } from "apollo-boost";

const getMessagesQuery = gql`
  {
    messages {
      id
      message
    }
  }
`;
export { getMessagesQuery };
