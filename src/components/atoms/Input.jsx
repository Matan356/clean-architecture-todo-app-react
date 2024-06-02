/* eslint-disable react/prop-types */
// components/atoms/Input.js

const Input = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default Input;
