import { useState } from "react";

export default function PackingList({
  ValueArray,
  DeleteItem,
  CheckItem,
  clearItems,
}) {
  const [sortBy, SetSortBy] = useState("input");
  let SortedBy;
  if (sortBy === "input") SortedBy = ValueArray;
  if (sortBy === "description")
    SortedBy = ValueArray.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortBy === "packed")
    SortedBy = ValueArray.slice().sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  return (
    <div className="list">
      <ul>
        {SortedBy.map((item) => (
          <Item
            key={item.id}
            item={item}
            idItem={item.id}
            DeleteItem={DeleteItem}
            CheckItem={CheckItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => SetSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description"> Sort By The Description</option>
          <option value="packed"> Sord by Packed Status</option>
        </select>
        <button onClick={clearItems}>Clear List </button>
      </div>
    </div>
  );
}
function Item({ item, idItem, DeleteItem, CheckItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          CheckItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => DeleteItem(idItem)}>❌</button>
    </li>
  );
}
