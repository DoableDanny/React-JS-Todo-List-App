import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.TodoForm(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>Add an Item...</p>
        <input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Type Todo..."
          onChange={this.onChange}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default TodoForm;
