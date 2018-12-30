import React, { Component } from "react";
import Form from "./Form";
import uuidv1 from "uuid/v1";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: "",
      id: ""
    };
  }

  onChange = e => {
    this.setState({
      name: e.target.value,
      error: false,
      message: ""
    });
  };

  onEdit = id => {
    this.setState({
      id
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    if (name !== "") {
      let field = { name, id: uuidv1() };
      this.setState(prevState => {
        return {
          list: prevState.list.concat(field),
          name: ""
        };
      });
    } else {
      this.setState({
        error: true,
        message: "Inputan tidak boleh kosong"
      });
    }
  };

  onDelete = id => {
    let list = this.state.list;
    let filterList = list.filter(item => {
      return item.id !== id;
    });
    this.setState({ list: filterList });
  };

  onUpdate = (id, value) => {
    let list = this.state.list;
    let newList = list.map(data => {
      if (id === data.id) {
        return {
          id,
          name: value
        };
      }
      return data;
    });
    this.setState({
      list: newList,
      id: ""
    });
  };

  render() {
    const { name, list, id } = this.state;
    return (
      <div className="app">
        <div className="container">
          <Form onChange={this.onChange} onSubmit={this.onSubmit} name={name} />
          <List
            list={list}
            onDelete={this.onDelete}
            onUpdate={this.onUpdate}
            onEdit={this.onEdit}
            id={id}
          />
        </div>
      </div>
    );
  }
}

export default App;
