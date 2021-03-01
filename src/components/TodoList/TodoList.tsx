import React from 'react';
import TodoListItem from '../TodoListItem';
import { TodoListProps } from './TodoList.type';
import { StyledTodoList } from './TodoList.style';

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
