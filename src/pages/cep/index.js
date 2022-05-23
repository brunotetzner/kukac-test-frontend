import { Box, Flex, Text, Center } from "@chakra-ui/react";
import { StyledButton } from "../../components/styledButton";
import { StyledInput } from "../../components/styledInput";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getCep } from "../../services/api";
import { CardCepInfo } from "../../components/cardCepInfo";
const CepPage = () => {
  const [cep, setCep] = useState();
  const [returnedCep, setReturnedCep] = useState();
  const [error, setError] = useState(false);
  const navegate = useNavigate();
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
        position="relative"
      >
        Buscar por cep
        <Center
          w="23px"
          h="23px"
          position="absolute"
          right="6%"
          _hover={{ transition: "0.6s", color: "white" }}
        >
          <FiLogOut cursor="pointer" onClick={() => navegate("/")} />
        </Center>
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
            Preencha o campo abaixo com um cep
          </Text>

          <StyledInput placeholder={"cep1"} width="80%" setState={setCep} />

          <Box mt="3%">
            <StyledButton
              callback={() => getCep(cep, setReturnedCep, setError)}
              width="200px"
              height="30px"
              text="Buscar"
            />
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
            {error === true ? (
              "Não foi possivel achar o cep informado. Revise as informações e tente novamente"
            ) : returnedCep ? (
              <CardCepInfo
                logradouro={returnedCep.logradouro}
                complemento={returnedCep.complemento}
                bairro={returnedCep.bairro}
                localidade={returnedCep.localidade}
                estado={returnedCep.estado}
                ddd={returnedCep.ddd}
              />
            ) : (
              ""
            )}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export { CepPage };
