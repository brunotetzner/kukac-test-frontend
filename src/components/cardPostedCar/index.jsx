import { Text, Center } from "@chakra-ui/react";

export const CardPostedCar = ({
  model,
  fabricationYear,
  peopleQuantity,
  mark,
  portsQuantity,
}) => {
  return (
    <Center
      h="60%"
      flexDirection="column"
      fontFamily="Roboto mono"
      color="#57677E"
      fontSize="16px"
      textAlign="start"
    >
      <Text w="90%" margin="2%">
        Modelo: {model}
      </Text>
      <Text w="90%" margin="2%">
        Ano de fabricação: {fabricationYear}
      </Text>
      <Text w="90%" margin="2%">
        Quantidade de pessoas: {peopleQuantity}
      </Text>
      <Text w="90%" margin="2%">
        Marca: {mark}
      </Text>
      <Text w="90%" margin="2%">
        Quantidade de portas: {portsQuantity}
      </Text>
    </Center>
  );
};
