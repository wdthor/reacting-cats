import React from "react";

type ScrollProps = {
  children: React.ReactNode;
};

const Scroll: React.FC<ScrollProps> = (props) => {
  // inline css is purposefully used to know how it's done in React
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "40rem",
        borderTop: "1px solid #ffffff22",
        padding: "1rem",
      }}
      className="invisible-scroll"
    >
      {props.children}
    </div>
  );
};

export default Scroll;
