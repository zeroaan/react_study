import React, { useState } from "react";
import "./styles.css";

const contents = [
  { tab: "Section 1", content: "This is Section 1" },
  { tab: "Section 2", content: "This is Section 2" },
  { tab: "Section 3", content: "This is Section 3" },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <div className="container">
      <h1>Hello CodeSandbox</h1>
      <div className="box">
        {contents.map((section, index) => (
          <input
            key={index}
            onClick={() => changeItem(index)}
            type="button"
            value={section.tab}
          />
        ))}
      </div>
      {currentItem.content}
    </div>
  );
};

export default App;
