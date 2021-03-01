import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

import { TodoInsertProps } from './TodoInsert.type';
import {
  StyledButton,
  StyledInput,
  StyledTodoInsert,
} from './TodoInsert.style';

const TodoInsert: React.FC<TodoInsertProps> = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <StyledTodoInsert onSubmit={onSubmit}>
      <StyledInput
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <StyledButton type="submit">
        <MdAdd />
      </StyledButton>
    </StyledTodoInsert>
  );
};

export default TodoInsert;
