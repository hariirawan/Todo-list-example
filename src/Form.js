import React, { Component } from "react";

export default class Form extends Component {
  render() {
    const { onChange, onSubmit, name } = this.props;
    return (
      <form onSubmit={onSubmit} className="container-form">
        <input
          type="text"
          placeholder="Nama mahasiswa"
          onChange={onChange}
          value={name}
        />
        <button className="btn-succcess">Simpan</button>
      </form>
    );
  }
}
