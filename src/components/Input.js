import "./Input.css";
import { useState } from "react";

function Input(props) {
  const [inputText, setInputText] = useState("");
  const [currentKey, setCurrentKey] = useState(1);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    props.addTodo({ key: currentKey, text: inputText });
    setCurrentKey(currentKey + 1);
    setInputText("");
  };

  return (
    <form className="Input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do today?"
        value={inputText}
        onChange={handleChange}
        size="27"
      ></input>
      <button>Submit</button>
    </form>
  );
}

export default Input;
