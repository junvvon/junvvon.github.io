import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { TodoListItemProps } from './TodoListItem.type';
import {
  StyledTodoListItem,
  Checkbox,
  Text,
  Remove,
} from './TodoListItem.style';

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <StyledTodoListItem>
      <Checkbox checked={checked}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text checked={checked}>{text}</Text>
      </Checkbox>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </StyledTodoListItem>
  );
};

export default TodoListItem;
