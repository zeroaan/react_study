import { useState } from "react";

const useInput = (initialValue = "", maxLength = 20) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const { value } = e.target;
    let willUpdate = true;
    if (value.length > maxLength) {
      willUpdate = false;
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export default useInput;
