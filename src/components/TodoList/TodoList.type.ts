export interface todo {
  id: number;
  text: string;
  checked: boolean;
}

export interface TodoListProps {
  todos: Array<todo>;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}
