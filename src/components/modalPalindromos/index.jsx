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
import { searchForPalindromes } from "../../services/api";
export const ModalPalindromo = ({ isOpen, onClose }) => {
  const [maxInputValue, setMaxInputValue] = useState();
  const [minInputValue, setMinInputValue] = useState();
  const [returnedPalindromes, setReturnedPalindromes] = useState();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgb(217, 217, 217, 0.8)" />
      <ModalContent
        bg="white"
        w="80%"
        h="80%"
        ml="10%"
        mt="4%"
        borderRadius="5px"
      >
        <ModalHeader
          w="100%"
          h="12%"
          fontFamily="Roboto mono"
          backgroundColor="#F3C139"
          color="#57677E"
          fontSize="45px"
          textAlign="center"
          borderRadius="5px"
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
                <StyledButton
                  width="100px"
                  text="Pesquisar"
                  callback={() =>
                    searchForPalindromes(
                      {
                        initialValue: minInputValue,
                        finalValue: maxInputValue,
                      },
                      setReturnedPalindromes
                    )
                  }
                />
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
          <Center w="90%" ml="5%">
            <Text fontFamily="Roboto mono" color="#57677E" fontSize="15px">
              {returnedPalindromes
                ? returnedPalindromes.map((number) => `${number}, `)
                : "Faça uma pesquisa :)"}
            </Text>
          </Center>
        </ModalBody>

        <ModalFooter
          w="90%"
          h="10%"
          display="flex"
          alignItems="center"
          ml="5%"
          justifyContent="flex-start"
        >
          <StyledButton width="100px" text="Voltar" callback={onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
