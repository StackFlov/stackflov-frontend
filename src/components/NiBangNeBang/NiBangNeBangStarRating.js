import React, { useState } from "react";

function NiBangNeBangStarRating({ value = 0, onChange }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ display: "flex", gap: 6, margin: "10px 0" }}>
      {[0, 1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          style={{
            cursor: "pointer",
            fontSize: "2rem",
            color:
              hovered !== null
                ? num <= hovered
                  ? "#FFD600"
                  : "#CCCCCC"
                : num <= value
                ? "#FFD600"
                : "#CCCCCC",
            transition: "color 0.2s",
          }}
          onClick={() => onChange(num)}
          onMouseEnter={() => setHovered(num)}
          onMouseLeave={() => setHovered(null)}
        >
          ★
        </span>
      ))}
      <span style={{ marginLeft: 8, fontSize: "1.2rem" }}>{value}점</span>
    </div>
  );
}

export default NiBangNeBangStarRating;
