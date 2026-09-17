import React from "react";

const BackGround = () => {
  return (
    <img
      draggable={false}
      className="pointer-events-none fixed top-0 -z-50 h-full w-full select-none"
      src="/background.png"
      alt=""
    />
  );
};

export default BackGround;
