import "./ListItem.css";

function ListItem(props) {
  const handleDelete = () => {
    props.deleteTodo(props.listItem.key);
  };

  return (
    <div className="ListItem">
      <div className="Text">&nbsp; {props.listItem.text}</div>
      <div className="Button">
        {/* <button className="EditButton">Edit</button> */}
        <button className="DeleteButton" onClick={handleDelete}>
          Finished
        </button>
      </div>
    </div>
  );
}

export default ListItem;
