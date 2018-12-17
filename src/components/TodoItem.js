import React, {Component} from 'react';
import '../css/TodoItem.css';


export class TodoItem extends Component {
    constructor (props) {
        super(props);

        this.state = {
            title : this.props.title,
            isDone : this.props.isDone
        }

        this.handleCheckChange = this.handleCheckChange.bind(this);
    }

    handleCheckChange(event) {
        this.setState({
          isDone : !this.state.isDone
        }); 
      }

    render() {
        const label = this.state.isDone ? (
                <label htmlFor={this.state.title} className="done" >{this.state.title}</label>
        ) : (
                <label htmlFor={this.state.title}>{this.state.title}</label>
        )
        const checkbox = this.state.isDone ? (
                <input type="checkbox" id={this.state.title} name={this.state.title} onChange={this.handleCheckChange} checked/>
        ) : (
                <input type="checkbox" id={this.state.title} name={this.state.title} onChange={this.handleCheckChange}/>
        )
      
        return (
            <li>
                {checkbox}
                {label}
            </li>
        )
    }
}
