import React from 'react';

const TodoList = props => {
	const todoList = props.list.map(item => {
	    return <Todo item={item} removeTodo={props.remove} key={item.id}/>;
	  });
	return <ul>{todoList}</ul>;             
};

const Todo = ({item, removeTodo}) => {
    return <li onClick = {() => removeTodo(item.id)}> {item.text} </li>;
};

export default TodoList;

{/* item - pojedynczy element tablicy list[]  */}
{/* lista - tablica z danymi z App.js (this.state.data)  */}
{/* 'id' i 'text' są z tablicy this.state.data z App.js  */}
{/* <ul>{todoList}</ul>;  --> zwroc nowa tablice 'todoList'  */}