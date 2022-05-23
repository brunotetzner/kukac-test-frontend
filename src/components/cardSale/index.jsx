import { Text, Center, Flex } from "@chakra-ui/react";
export const CardSale = ({
  saleValue,
  receivedValue,
  change,
  oneNote,
  tenNote,
  oneHundredNote,
}) => {
  return (
    <Center
      w="100%"
      h="60%"
      flexDirection="row"
      fontFamily="Roboto mono"
      color="#57677E"
      fontSize="16px"
      textAlign="start"
      border="3px solid"
      borderRadius="4px"
      borderColor="#F3C139"
    >
      <Flex
        flexDirection="column"
        borderRight="3px solid"
        borderColor="#F3C139"
        w="33.333%"
        h="100px"
        justifyConter="space-evenly"
        justifyContent="center"
        alignItems="center"
      >
        <Text w="90%" margin="2%">
          Valor da venda: R${Number(saleValue).toFixed(2)}
        </Text>
        <Text w="90%" margin="2%">
          Valor recebido: R${Number(receivedValue).toFixed(2)}
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        w="33.333%"
        h="100%"
        justifyConter="space-evenly"
        justifyContent="center"
        alignItems="center"
      >
        <Text w="90%" margin="2%">
          Troco:R${Number(change).toFixed(2)}
        </Text>
        <Text w="90%" margin="2%">
          Notas de um: {oneNote}
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        borderLeft="3px solid"
        borderColor="#F3C139"
        w="33.333%"
        h="100px"
        justifyConter="space-evenly"
        justifyContent="center"
        alignItems="center"
      >
        <Text w="90%" h="50%" margin="2%">
          Notas de dez: {tenNote}
        </Text>
        <Text w="90%" h="50%" margin="2%">
          Notas de cem: {oneHundredNote}
        </Text>
      </Flex>
    </Center>
  );
};
