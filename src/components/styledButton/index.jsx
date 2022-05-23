import { Button } from "@chakra-ui/react";
export const StyledButton = ({ text, width, height, callback }) => {
  return (
    <Button
      height={height}
      backgroundColor="#AFEF27"
      cursor="pointer"
      border="0"
      borderRadius="4px"
      fontFamily="Roboto mono"
      fontSize="14px"
      color="#3E506C"
      w={width}
      onClick={callback}
      _hover={{
        transition: "0.8s",
        boxShadow: "1px 1px 12px 1px  #3E506C",
        border: "1px solid",
        borderColor: "white",
      }}
    >
      {text}
    </Button>
  );
};
