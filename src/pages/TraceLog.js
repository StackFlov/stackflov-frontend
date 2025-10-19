import React, { useState } from "react";
import TraceCategorySelector from "../components/TraceLogs/TraceCategorySelector";
import TraceList from "../components/TraceLogs/TraceList";

const TraceLog = () => {
  const [nowCategory, setNowCategory] = useState(99);

  return (
    <div>
      <TraceCategorySelector
        nowCategory={nowCategory}
        setNowCategory={setNowCategory}
      />

      <TraceList nowCategory={nowCategory} />
    </div>
  );
};

export default TraceLog;
