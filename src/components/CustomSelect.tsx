import React, { useState } from "react";
import { Select, Flex, Text, Box } from "@chakra-ui/react";
import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
    const [selectedLabel, setSelectedLabel] = useState<string>(options[0].label);


  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find((option) => option.value === selectedValue);
    if (selectedOption) {
      setSelectedOption(selectedOption);
      setSelectedLabel(selectedOption.label);
    }
  };

  return (
    <Flex align="center" justify="space-between">
      <Select placeholder="Select Gender" value={selectedOption.value} onChange={handleSelectChange} icon={<ChevronDownIcon />} bg="#D9D9D9">
     {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Box ml={2}>
        <Text fontSize="lg">
          {selectedLabel}
          {selectedOption.value === options[0].value && <CheckIcon color="#00FF00" />}
        </Text>
      </Box>
    </Flex>
  );
};

export default CustomSelect;
