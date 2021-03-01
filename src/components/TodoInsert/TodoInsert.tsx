import React from 'react';
import { MdAdd } from 'react-icons/md';

import { TodoInsertProps } from './TodoInsert.type';
import {
  StyledButton,
  StyledInput,
  StyledTodoInsert,
} from './TodoInsert.style';

// eslint-disable-next-line
const TodoInsert: React.FC<TodoInsertProps> = ({}) => {
  return (
    <StyledTodoInsert>
      <StyledInput placeholder="할 일을 입력하세요" />
      <StyledButton type="submit">
        <MdAdd />
      </StyledButton>
    </StyledTodoInsert>
  );
};

export default TodoInsert;
