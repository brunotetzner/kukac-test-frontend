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

import { useState, useEffect } from "react";
import { StyledInput } from "../styledInput";
import { StyledButton } from "../styledButton";
import { CardPostedMotorCycle } from "../cardPostedMotorCycle";
import { postMotorCycle } from "../../services/api";

export const ModalMotorCycle = ({ isOpen, onClose }) => {
  const [motorCycleModel, setMotorCycleModel] = useState();
  const [motorCycleFabricationYear, setMotorCycleFabricationYear] = useState();
  const [motorCycleMaxPeoplesQuantity, setMotorCycleMaxPeoplesQuantity] =
    useState();
  const [motorCycleMark, setMotorCycleMark] = useState();
  const [motorCycleWheelsQuantity, setMotorCycleWheelsQuantity] = useState();
  const [objectToDoRequest, setObjectToDoRequest] = useState({});
  const [postedMotorCycle, setPostedMotorCycle] = useState({});

  useEffect(() => {
    setObjectToDoRequest({
      model: motorCycleModel,
      fabricationYear: motorCycleFabricationYear,
      peopleQuantity: motorCycleMaxPeoplesQuantity,
      mark: motorCycleMark,
      wheels: motorCycleWheelsQuantity,
    });
  }, [
    motorCycleModel,
    motorCycleFabricationYear,
    motorCycleMaxPeoplesQuantity,
    motorCycleMark,
    motorCycleWheelsQuantity,
  ]);

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
          Cadastrar moto
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
              Cadastrar
            </Text>

            <StyledInput
              placeholder={"Modelo"}
              width="80%"
              setState={setMotorCycleModel}
            />
            <StyledInput
              placeholder={"Ano de fabricação"}
              width="80%"
              setState={setMotorCycleFabricationYear}
            />
            <StyledInput
              placeholder={"Marca"}
              width="80%"
              setState={setMotorCycleMark}
            />
            <StyledInput
              placeholder={"Quantidade de rodas"}
              width="80%"
              setState={setMotorCycleWheelsQuantity}
            />
            <StyledInput
              placeholder={"Maximo de passageiros"}
              width="80%"
              setState={setMotorCycleMaxPeoplesQuantity}
            />
            <Box mt="3%">
              <StyledButton
                callback={() =>
                  postMotorCycle(objectToDoRequest, setPostedMotorCycle)
                }
                width="200px"
                height="30px"
                text="Cadastrar
              "
              />
            </Box>
          </Flex>
          <Flex
            mt="2%"
            h="95%"
            w="25%"
            flexDirection="column"
            marginRight="5%"
            alignItems="center"
            justifyContent="center"
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
              {postedMotorCycle.model
                ? "Resultado"
                : "O resultado aparecera aqui"}
            </Text>
            {postedMotorCycle.model ? (
              <CardPostedMotorCycle
                model={postedMotorCycle.model}
                fabricationYear={postedMotorCycle.fabricationYear}
                peopleQuantity={postedMotorCycle.peopleQuantity}
                mark={postedMotorCycle.mark}
                wheels={postedMotorCycle.wheels}
              />
            ) : (
              ""
            )}
          </Flex>
        </ModalBody>

        <ModalFooter h="10%" mr="5%">
          <StyledButton width="100px" text="Voltar" callback={onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
