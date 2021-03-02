import React from 'react';
import { TodoListProps } from './TodoList.type';
import { StyledTodoList } from './TodoList.style';
import TodoListItem from '@components/TodoListItem';

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
