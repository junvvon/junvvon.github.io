import React from 'react';
import { TodoTemplateProps } from './TodoTemplate.type';
import { StyledTodoTemplate, AppTitle, Content } from './TodoTemplate.style';

const TodoTemplate: React.FC<TodoTemplateProps> = ({ children }) => {
  return (
    <StyledTodoTemplate>
      <AppTitle>일정 관리</AppTitle>
      <Content>{children}</Content>
    </StyledTodoTemplate>
  );
};

export default TodoTemplate;
