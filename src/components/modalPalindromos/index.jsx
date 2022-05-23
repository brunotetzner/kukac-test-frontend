import {
  Heading,
  Flex,
  Modal,
  ModalContent,
  Box,
  ModalBody,
  ModalFooter,
  Text,
  Center,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { StyledInput } from "../styledInput";
import { StyledButton } from "../styledButton";
export const ModalPalindromo = ({ isOpen, onClose }) => {
  const [maxInputValue, setMaxInputValue] = useState();
  const [minInputValue, setMinInputValue] = useState();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgb(217, 217, 217, 0.8)" />
      <ModalContent bg="white" w="80%" h="80%" ml="10%" mt="4%">
        <ModalHeader
          w="100%"
          h="12%"
          fontFamily="Roboto mono"
          backgroundColor="#F3C139"
          color="#57677E"
          fontSize="45px"
          textAlign="center"
        >
          Calculadora de palindromos
        </ModalHeader>
        <ModalBody h="90%">
          <Box w="100%" h="35%" display="flex" flexDirection="row">
            <Flex w="50%" h="100%" flexDirection="column" marginLeft="5%">
              <Text fontFamily="Roboto mono" color="#57677E" fontSize="18px">
                Digite o numero do qual a contagem partira:
              </Text>
              <StyledInput
                placeholder={"inicio"}
                width="50px"
                setState={setMinInputValue}
              />
              <Box mt="3%">
                <StyledButton width="100px" text="Pesquisar" />
              </Box>
            </Flex>
            <Flex
              w="50%"
              h="100%"
              flexDirection="column"
              marginRight="5%"
              alignItems="flex-end"
            >
              <Text
                fontFamily="Roboto mono"
                color="#57677E"
                fontSize="18px"
                textAlign="end"
              >
                Digite o numero onde a contagem devera terminar:
              </Text>
              <StyledInput
                placeholder={"fim"}
                width="50px"
                setState={setMaxInputValue}
              />
            </Flex>
          </Box>
          <Heading
            w="90%"
            ml="5%"
            mt="1%"
            fontFamily="Roboto mono"
            textAlign="center"
            borderBottom="1px solid"
            borderColor="#F3C139"
            color="#57677E"
          >
            Resultados
          </Heading>
          <Center></Center>
        </ModalBody>

        <ModalFooter h="10%" mr="2%">
          <StyledButton width="100px" text="Voltar" callback={onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
