import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Authentication extends Component {
  state = {
    title: ''
  }
  // PropTypes

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div style={{ display: 'flex',
                    width: '100px',
                    height: '40px',
                    position: 'relative',
                    right: '-40%',
                    top: '200px'}}>
        <form onSubmit={this.onSubmit} style={{ display: 'flex',
                                                flexDirection: 'column'  }}>
          <input
            type="text"
            name="username"
            style={{ flex: '10', padding: '5px' }}
            placeholder="username ..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="title"
            style={{ flex: '10', padding: '5px' }}
            placeholder="password ..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{flex: '1'}}
          />
        </form>
      </div>
    )
  }
}

Authentication.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Authentication;
