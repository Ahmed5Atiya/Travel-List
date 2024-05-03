export default function Stats({ ValueArray }) {
  if (!ValueArray.length) {
    return (
      <footer className="stats">
        <em>Start Adding Some Items To Your Packets </em>
      </footer>
    );
  }

  const NumItem = ValueArray.length;
  const EndItem = ValueArray.filter((item) => {
    return item.packed;
  }).length;
  const Persent = Math.round((EndItem / NumItem) * 100);

  return (
    <footer className="stats">
      <em>
        {Persent === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${NumItem} items on your list, and you already packed ${EndItem}
        (${Persent}%)`}
      </em>
    </footer>
  );
}
