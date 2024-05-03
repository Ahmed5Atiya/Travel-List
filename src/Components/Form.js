import { useState } from "react";

export default function Form({ AddItem }) {
  const [InputValue, setValue] = useState("");
  const [valueOption, setOption] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();

    const item = {
      quantity: valueOption,
      description: InputValue,
      id: Date.now(),
      packed: false,
    };
    console.log(item);
    AddItem(item);
    setOption(1);
    setValue("");
  }

  function GetOption(e) {
    setOption(e.target.value);
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your Trips?</h3>
      <select onChange={GetOption} value={Number(valueOption)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* start the input value  */}
      <input
        placeholder="item...."
        value={InputValue}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handelSubmit}>Add</button>
    </form>
  );
}
