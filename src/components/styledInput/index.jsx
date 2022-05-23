import { Input } from "@chakra-ui/react";

export const StyledInput = ({ placeholder, width, setState }) => {
  return (
    <Input
      onChange={(e) => setState(e.target.value)}
      textAlign="center"
      fontFamily="roboto mono"
      color="#3E506C"
      fontSize="12px"
      padding="4px"
      borderRadius="2px"
      fontWeight="bold"
      width={width}
      placeholder={placeholder}
      border="none"
      bg="#D9D9D9"
      h="20px"
    />
  );
};
