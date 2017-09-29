import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.notes,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e, id) {
    this.prps.app.setState(prevState => ({
      notes: prevState.Notes.filter(note => note.id !== id),
    }));
  }

  render() {
    console.log(this.state);
    return (
      <div className="note-list">
        {this.state.noteList.length ?
          <div>
            <h2>Checkout the map jazz</h2>
            <ul>
              {this.state.noteList
                // .map(notes => <li key={notes.id}>{notes.notes}: {notes.noteText}<button onClick={(event) =>
                // this.handleDelete(event, notes, id)}d</li>)}; //++++++++ Finish this out!!!
              }
            </ul>
          </div>
          :
          <h2>There are no notes</h2>
        }
      </div>
    );
  }
}

export default NoteList;
