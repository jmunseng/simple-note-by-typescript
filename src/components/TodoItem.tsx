import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <div className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </div>
  );
};

export default TodoItem;
