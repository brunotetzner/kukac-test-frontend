import { Center, Image, Text, Box } from "@chakra-ui/react";
const CardHome = ({ name, image, callback }) => {
  return (
    <Box
      onClick={callback}
      cursor="pointer"
      borderRadius="5px"
      w="165px"
      h="167px"
      bg="#D9D9D9"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      _hover={{
        transition: "0.8s",
        boxShadow: "1px 7px 17px 4px  #3E506C",
        border: "1px solid",
        borderColor: "white",
      }}
    >
      <Image src={image} w="77px" h="77px" borderRadius="50%" />
      <Text w="90%" textAlign="center" fontFamily="Roboto mono" color="#3E506C">
        {name}
      </Text>
    </Box>
  );
};

export { CardHome };
