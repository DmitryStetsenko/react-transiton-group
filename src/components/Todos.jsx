import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Todos = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([
    {id: 1, text: 'todo1'},
    {id: 2, text: 'todo2'},
    {id: 3, text: 'todo3'},
    {id: 4, text: 'todo4'},
  ]);

  const addTodo = () => {
    setTodoList([...todoList, {id: window.crypto.randomUUID(), text: text}]);
  }

  return (
    <div className="todos">
      <div className="add-todo">
        <input type="text" value={text} onChange={e => setText(e.target.value)}/>
        <button onClick={ addTodo }>add</button>
      </div>

      <TransitionGroup component="ul" className="todos">
        {
          todoList.map( ({id, text}) => 
            <CSSTransition
              key={id}
              timeout={500}
              classNames="todo"
            >
              <li className="todo" onClick={() => setTodoList([...todoList.filter(todo => todo.id !== id)])}>{id} {text}</li> 
            </CSSTransition>
          )
        }
      </TransitionGroup>
      
    </div>
  );
};

export default Todos;