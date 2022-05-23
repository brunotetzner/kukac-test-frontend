import { Center, Flex, Heading, useDisclosure } from "@chakra-ui/react";

import { CardHome } from "../../components/cardHome/index.jsx";
import { ModalPalindromo } from "../../components/modalPalindromos/index.jsx";
import { ModalCars } from "../../components/modalCars/index.jsx";
import { ModalMotorCycle } from "../../components/modalMotorCycle/index.jsx";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Calculadora from "../../assets/images/calc.jpeg";
import Carro from "../../assets/images/car.png";
import Moto from "../../assets/images/moto.png";
import Cep from "../../assets/images/cep.png";
import { searchForPalindromes } from "../../services/api.jsx";

const HomePage = () => {
  const {
    isOpen: isOpenModalPalindromes,
    onOpen: onOpenModalPalindromes,
    onClose: onCloseModalPalindromes,
  } = useDisclosure();

  const {
    isOpen: isOpenModalCars,
    onOpen: onOpenModalCars,
    onClose: onCloseModalCars,
  } = useDisclosure();

  const {
    isOpen: isOpenModalMotorcycle,
    onOpen: onOpenModalMotorcycle,
    onClose: onCloseModalMotorcycle,
  } = useDisclosure();

  const navigate = useNavigate();

  const cardsInfo = [
    {
      name: "Calculadora de polindromos",
      image: Calculadora,
      openModal: onOpenModalPalindromes,
    },
    { name: "Cadastro de carros", image: Carro, openModal: onOpenModalCars },
    {
      name: "Cadastro de motos",
      image: Moto,
      openModal: onOpenModalMotorcycle,
    },
    {
      name: "Buscar por cep",
      image: Cep,
      openModal: () => navigate("/search/cep"),
    },
  ];
  return (
    <>
      <Center
        maxW="100vw"
        h="97vh"
        bg="#F3C139"
        margin="0"
        border="0"
        padding="0"
        flexDirection="column"
      >
        <ModalPalindromo
          isOpen={isOpenModalPalindromes}
          onClose={onCloseModalPalindromes}
        />

        <ModalCars isOpen={isOpenModalCars} onClose={onCloseModalCars} />
        <ModalMotorCycle
          isOpen={isOpenModalMotorcycle}
          onClose={onCloseModalMotorcycle}
        />

        <Heading
          fontFamily="Roboto mono"
          color="#3E506C"
          marginBottom="5%"
          fontSize="50px"
        >
          Utilitarios
        </Heading>
        <Flex
          w="80%"
          h="62%"
          bg="white"
          marginBottom="5%"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {cardsInfo.map((info) => (
            <CardHome
              name={info.name}
              image={info.image}
              openModal={info.openModal}
            />
          ))}
        </Flex>
      </Center>
    </>
  );
};

export { HomePage };
