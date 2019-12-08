import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {

  getStyle= () => {
     return{
       background: '#90a7a126',
       padding: '10px',
       borderBottom: '1px #ccc dotted' ,
       textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
    }
    

  render() {
    const { id, title} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox"  onChange={this.props.markComplete.bind(this, id)} />{'  '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
          </p>
      </div>
    )
  }
}

const btnStyle ={
  background: 'red',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// PropTypes
Todoitem.propTypes ={
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
} 


export default Todoitem;
