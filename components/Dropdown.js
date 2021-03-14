import React, { useState } from 'react';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';

const options = [
  { id: 1, value: 'Today', label: 'Today' },
  { id: 2, value: 'Week', label: 'Week' },
  { id: 3, value: 'Month', label: 'Month' },
];

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (selectedOption) => {
    setSelectedOption({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      id='options'
      instanceId='options'
    />
  );
};
export default Dropdown;
