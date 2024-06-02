/* eslint-disable react/prop-types */
// components/atoms/Button.js

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
