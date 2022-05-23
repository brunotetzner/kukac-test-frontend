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
import { calculateSale } from "../../services/api";
import { CardSale } from "../cardSale";
export const ModalSale = ({ isOpen, onClose }) => {
  const [receivedValue, setReceivedValue] = useState();
  const [saleValue, setSaleValue] = useState();
  const [returned, setReturned] = useState();
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
          fontSize="37px"
          textAlign="center"
          borderRadius="5px"
        >
          Calculadora de vendas
        </ModalHeader>
        <ModalBody h="90%">
          <Box w="100%" h="35%" display="flex" flexDirection="row">
            <Flex w="50%" h="100%" flexDirection="column" marginLeft="5%">
              <Text fontFamily="Roboto mono" color="#57677E" fontSize="18px">
                Digite o valor da venda:
              </Text>
              <StyledInput
                placeholder={"Valor da venda"}
                width="150px"
                setState={setSaleValue}
              />
              <Box mt="3%">
                <StyledButton
                  width="100px"
                  text="Calcular"
                  callback={() =>
                    calculateSale(
                      {
                        saleValue: saleValue,
                        receivedValue: receivedValue,
                      },
                      setReturned
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
                Digite o valor entregue pelo cliente
              </Text>
              <StyledInput
                placeholder={"Valor recebido"}
                width="150px"
                setState={setReceivedValue}
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
          <Center w="100%">
            <Text fontFamily="Roboto mono" color="#57677E" fontSize="15px">
              {returned ? (
                <CardSale
                  saleValue={returned.saleValue}
                  receivedValue={returned.receivedValue}
                  change={returned.change}
                  oneNote={returned.oneNote}
                  tenNote={returned.tenNote}
                  oneHundredNote={returned.oneHundredNote}
                />
              ) : (
                "Os resultados dos seus calculos aparecerão aqui :)"
              )}
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
