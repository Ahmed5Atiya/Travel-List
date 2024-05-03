// import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import Logo from "./Components/Logo";
import Stats from "./Components/Stats";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Ahmed", quantity: 15, packed: false },
// ];

export default function App() {
  const [ValueArray, SetValueArray] = useState([]);

  function AddItem(item) {
    SetValueArray((items) => [...ValueArray, item]);
  }

  function clearItems() {
    let confirm = window.confirm("Do You Want To Delete All Items");
    if (confirm) SetValueArray([]);
  }

  function DeleteItem(id) {
    const newItems = ValueArray.filter((item) => {
      return item.id !== id;
    });
    SetValueArray(newItems);
  }

  function CheckItem(id) {
    SetValueArray((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  // this is the first project by the react
  return (
    <div className="app">
      <Logo />
      <Form AddItem={AddItem} />
      {/* <PackingList /> */}
      <PackingList
        ValueArray={ValueArray}
        DeleteItem={DeleteItem}
        CheckItem={CheckItem}
        clearItems={clearItems}
      />
      <Stats ValueArray={ValueArray} />
    </div>
  );
}
