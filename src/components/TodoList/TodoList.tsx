import React from 'react';
import TodoListItem from '../TodoListItem';
import { TodoListProps } from './TodoList.type';
import { StyledTodoList } from './TodoList.style';

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
