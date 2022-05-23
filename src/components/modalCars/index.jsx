import {
  Flex,
  Modal,
  ModalContent,
  Box,
  ModalBody,
  ModalFooter,
  Text,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { StyledInput } from "../styledInput";
import { StyledButton } from "../styledButton";
export const ModalCars = ({ isOpen, onClose }) => {
  const [carModel, setCarModel] = useState();
  const [carFabricationYear, setFabricationYear] = useState();
  const [carMark, setCarMark] = useState();
  const [carPortsQuantity, setCarPortsQuantity] = useState();
  const [carMaxPeoplesQuantity, setCarMaxPeoplesQuantity] = useState();
  console.log(
    carModel,
    carFabricationYear,
    carMark,
    carPortsQuantity,
    carMaxPeoplesQuantity
  );
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
          Cadastrar carro
        </ModalHeader>
        <ModalBody
          h="88%"
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Flex
            mt="2%"
            h="95%"
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
              Informações do veiculo
            </Text>

            <StyledInput
              placeholder={"Modelo"}
              width="80%"
              setState={setCarModel}
            />
            <StyledInput
              placeholder={"Ano de fabricação"}
              width="80%"
              setState={setFabricationYear}
            />
            <StyledInput
              placeholder={"Marca"}
              width="80%"
              setState={setCarMark}
            />
            <StyledInput
              placeholder={"Quantidade de portas"}
              width="80%"
              setState={setCarPortsQuantity}
            />
            <StyledInput
              placeholder={"Maximo de passageiros"}
              width="80%"
              setState={setCarMaxPeoplesQuantity}
            />
            <Box mt="3%">
              <StyledButton width="200px" height="30px" text="Cadastrar" />
            </Box>
          </Flex>
          <Flex
            mt="2%"
            h="95%"
            w="25%"
            flexDirection="column"
            marginRight="5%"
            alignItems="flex-end"
            border="3px solid"
            borderColor="#F3C139"
            borderRadius="7px"
          >
            <Text
              w="100%"
              fontFamily="Roboto mono"
              color="#57677E"
              fontSize="18px"
              textAlign="center"
            >
              Resultado
            </Text>
          </Flex>
        </ModalBody>

        <ModalFooter h="10%" mr="5%">
          <StyledButton width="100px" text="Voltar" callback={onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
