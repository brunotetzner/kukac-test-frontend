import { Text, Center } from "@chakra-ui/react";

export const CardCepInfo = ({
  logradouro,
  complemento,
  bairro,
  localidade,
  estado,
  ddd,
}) => {
  return (
    <Center
      border="3px solid"
      borderColor="#F3C139"
      borderRadius="5px"
      padding="10px"
      h="100%"
      w="100%"
      flexDirection="column"
      fontFamily="Roboto mono"
      color="#57677E"
      fontSize="16px"
      textAlign="start"
    >
      <Text w="90%" margin="2%">
        Cidade: {localidade}
      </Text>
      <Text w="90%" margin="2%">
        Estado: {estado}
      </Text>
      <Text w="90%" margin="2%">
        ddd: {ddd}
      </Text>
      <Text w="90%" margin="2%">
        Logradouroo: {logradouro}
      </Text>
      <Text w="90%" margin="2%">
        Complemento: {complemento}
      </Text>
      <Text w="90%" margin="2%">
        Bairro: {bairro}
      </Text>
    </Center>
  );
};
