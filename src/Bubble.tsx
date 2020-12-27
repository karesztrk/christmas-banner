import { h } from 'preact';

const Bubble = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  const size = Math.random() * 10;
  return (
    <i
      style={{
        left: `${x}px`,
        top: `${y}px`,
        height: `${1 + size}px`,
        width: `${1 + size}px`,
        animationDuration: `${10 + size}s`,
        animationDelay: `-${size}s`,
      }}
    />
  );
};

export default Bubble;
