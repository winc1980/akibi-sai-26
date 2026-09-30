const BackGround = () => {
  return (
    <img
      draggable={false}
      className="pointer-events-none fixed top-0 -z-50 h-full w-full select-none"
      src="/background.webp"
      alt=""
    />
  );
};

export default BackGround;
