import "./List.css";
import ListItem from "./ListItem.js";

function List(props) {
  return (
    <div className="List">
      {props.fullTodoList.map((listItem) => {
        return (
          <ListItem
            key={listItem.key}
            listItem={listItem}
            deleteTodo={props.deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default List;
