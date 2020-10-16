import React from 'react';

interface Props {
  input: string;
  options: string[];
  onChange: any;
}

const Select = (props: Props) => {
  const { input, options, onChange } = props;

  const mappedOptions = options.map((option: any) => (
    <option key={option}>{option}</option>
  ));
  return (
    <>
      <select onChange={onChange} value={input || ''}>
        {mappedOptions}
      </select>
    </>
  );
};

export default Select;
