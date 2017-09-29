import React from 'react';
import uuid from 'uuid/v4';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      title: '',
      noteText: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      // noteText: someVal,
      // title: someOtherVal
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Isaiah, Look Here!', this.props.handleNoteCreate(this).noteCreate);
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, this.state],
    }));
  }

  render() {
    return (
      <form
        className="note-form"
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="noteText"
          placeholder="noteText"
          value={this.state.noteText}
          onChange={this.handleChange}/>

        <button type="submit">Add</button>
      </form>
    );
  }
}

export default NoteForm;
