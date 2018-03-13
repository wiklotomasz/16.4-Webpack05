import React from 'react';

const TodoList = props => {
const todoList = props.list.map(item => {
    return <li key={item.id}>{item.text}</li>;
  });
    return <ul>{todoList}</ul>;             
};

const Todo = ({item, removeItem}) => {
    return <li onClick = {() => removeItem(item.id)}> {item.text} </li>;
};

export default TodoList;

{/* item - pojedynczy element tablicy list[]  */}
{/* lista - tablica z danymi z App.js (this.state.data)  */}
{/* 'id' i 'text' są z tablicy this.state.data z App.js  */}
{/* <ul>{todoList}</ul>;  --> zwroc nowa tablice 'todoList'  */}