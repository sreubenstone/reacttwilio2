import * as React from "react";
import { graphql } from "react-apollo";
import { getMessagesQuery } from "../queries/queries";

interface Message {
  id: string;
  message: string;
}

export interface ListProps {
  data: {
    loading: boolean;
    messages: Message[];
  };
  messageitem: string;
}

export interface ListState {}

class List extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
  }

  displayMessages() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading pick up lines...</div>;
    } else {
      return data.messages.map(messageitem => {
        return <li key={messageitem.id}>{messageitem.message}</li>;
      });
    }
  }

  render() {
    return (
      <div>
        <ul>{this.displayMessages()}</ul>
      </div>
    );
  }
}

export default graphql(getMessagesQuery)(List);
