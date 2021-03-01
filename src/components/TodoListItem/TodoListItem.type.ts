export interface TodoListItemProps {
  todo: {
    id: number;
    text: string;
    checked: boolean;
  };
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}
