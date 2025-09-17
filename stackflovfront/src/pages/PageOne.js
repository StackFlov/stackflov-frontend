import React, { useEffect, useState } from "react";

const PageOne = () => {
  const [test, setTest] = useState("");
  useEffect(() => {}, [test]);

  return (
    <div>
      page1
      <input
        value={test}
        onChange={(e) => {
          setTest(e.target.value);
        }}
      />
      {test}
    </div>
  );
};

export default PageOne;
