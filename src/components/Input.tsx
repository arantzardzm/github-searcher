import React from 'react';

interface Props {
  input: string;
  placeholder: string;
  onChange: any;
}

const Input = (props: Props) => {
  const { input, placeholder, onChange } = props;

  return (
    <>
      <input
        onChange={onChange}
        placeholder={placeholder || ''}
        value={input || ''}
      />
    </>
  );
};

export default Input;
