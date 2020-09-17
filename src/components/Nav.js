import React from "react";

const Nav = (props) => {
  const listTag = [];
  for (let i = 0; i < props.list.length; i++) {
    const li = props.list[i];
    listTag.push(
      <li key={li.id}>
        <a
          href={li.id}
          data-id={li.id}
          onClick={(e) => {
            e.preventDefault();
            props.onClick(e.target.dataset.id);
          }}
        >
          {li.title}
        </a>
      </li>
    );
  }

  return (
    <div>
      <nav>
        <ul>{listTag}</ul>
      </nav>
    </div>
  );
};

export default Nav;
