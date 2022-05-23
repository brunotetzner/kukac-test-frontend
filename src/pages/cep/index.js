import { Box, Flex, Text } from "@chakra-ui/react";
import { StyledButton } from "../../components/styledButton";
import { StyledInput } from "../../components/styledInput";
import { useState, useEffect } from "react";

const CepPage = () => {
  const [cep1, setCep1] = useState();
  const [cep2, setCep2] = useState();
  const [cep3, setCep3] = useState();
  const [cep4, setCep4] = useState();
  const [cep5, setCep5] = useState();
  const [allCeps, setAllCeps] = useState();

  const [returnedCeps, setReturnedCeps] = useState();
  useEffect(() => {
    setAllCeps([cep1, cep2, cep3, cep4, cep5]);
  }, [cep1, cep2, cep3, cep4, cep5]);
  return (
    <>
      <Box
        w="100%"
        h="12vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="#3E506C"
        fontSize="45px"
        fontFamily="Roboto mono"
        bg="#F3C139"
        boxSizing="0"
      >
        Buscar por cep
      </Box>
      <Box w="100%" display="flex">
        <Flex
          mt="2%"
          h="60vh"
          w="25%"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          marginLeft="5%"
          border="3px solid"
          borderColor="#F3C139"
          borderRadius="7px"
        >
          <Text fontFamily="Roboto mono" color="#57677E" fontSize="18px">
            Preencha os campos abaixo com ceps
          </Text>

          <StyledInput placeholder={"cep1"} width="80%" setState={setCep1} />
          <StyledInput placeholder={"cep2"} width="80%" setState={setCep2} />
          <StyledInput placeholder={"cep3"} width="80%" setState={setCep3} />
          <StyledInput placeholder={"cep4"} width="80%" setState={setCep4} />
          <StyledInput placeholder={"cep5"} width="80%" setState={setCep5} />
          <Box mt="3%">
            <StyledButton width="200px" height="30px" text="Cadastrar" />
          </Box>
        </Flex>
        <Flex
          mt="2%"
          h="70vh"
          w="60%"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          marginLeft="5%"
        >
          <Text fontFamily="Roboto mono" color="#57677E" fontSize="18px">
            Resultados
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export { CepPage };
