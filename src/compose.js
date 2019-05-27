import React, {useState} from 'react';

function Compose(props) {

const [description, setDescription] = useState("");

function onChangeDescription(event) {
  const textbox = event.target;
  setDescription(textbox.value);
}

function submitForm(event) {
    // Prevent that a submit reloads the page.
    event.preventDefault();

    // Call the addToDo callback function from props and supply the entered description.
    props.addPost(description);

    // Clear the description so the textbox is cleared.
    setDescription("");
  }

  return (
    <div className="compose">
    <form onSubmit={submitForm}>
      <textarea rows="5" value={description} onChange={onChangeDescription}/>
      <br />
      <button type="submit">Post!</button>
    </form>
    </div>
  );
}

export default Compose;
