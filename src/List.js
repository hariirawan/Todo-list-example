import React, { Component, createRef } from "react";
import FlipMove from "react-flip-move";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.name = createRef();
  }

  onClose = () => {
    this.props.onEdit("");
  };

  onUpdate = () => {
    const { id } = this.props;
    let name = this.name.current.value;
    this.props.onUpdate(id, name);
  };

  render() {
    const { list, onDelete, id, onEdit } = this.props;
    return (
      <ul className="container-list">
        <FlipMove>
          {list.map(data => {
            return (
              <li key={data.id} className="container-list-item">
                {id !== data.id ? (
                  <React.Fragment>
                    <div>{data.name}</div>
                    <button
                      className="btn btn-edit  btn-circle"
                      onClick={onEdit.bind(this, data.id)}
                    >
                      <i className="fas fa-eye-dropper " />
                    </button>
                    <button
                      onClick={onDelete.bind(this, data.id)}
                      className="btn btn-delete btn-circle"
                    >
                      <i className="fas fa-trash-alt" />
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <input
                      type="text"
                      defaultValue={data.name}
                      ref={this.name}
                      className="input-edit"
                    />
                    <button
                      className="btn btn-success  btn-circle"
                      onClick={this.onUpdate}
                    >
                      <i className="fas fa-save " />
                    </button>
                    <button
                      className="btn btn-default btn-circle"
                      onClick={this.onClose}
                    >
                      <i className="fas fa-times" />
                    </button>
                  </React.Fragment>
                )}
              </li>
            );
          })}
        </FlipMove>
      </ul>
    );
  }
}
