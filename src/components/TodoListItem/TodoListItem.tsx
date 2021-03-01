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

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  onRemove,
  onToggle,
}) => {
  const { id, text, checked } = todo;

  return (
    <StyledTodoListItem>
      <Checkbox checked={checked} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text checked={checked}>{text}</Text>
      </Checkbox>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </StyledTodoListItem>
  );
};

export default TodoListItem;
