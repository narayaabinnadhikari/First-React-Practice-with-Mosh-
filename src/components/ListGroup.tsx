import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}:ListGroupProps) {
  //hook
  const [selectedIndex, setSelectedIndex]=useState(-1);
  // another example const [name, setName] = useState('');

  return (
    <>
      <h2>{heading}</h2>
      {items.length === 0 && <p>No City Found</p>}
      <ul className='list-group'>
        {items.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
