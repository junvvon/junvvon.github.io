import React from 'react';
import { TodoTemplateProps } from './TodoTemplate.type';

const TodoTemplate: React.FC<TodoTemplateProps> = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
