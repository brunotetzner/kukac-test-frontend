import { Center, Flex, Heading, useDisclosure } from "@chakra-ui/react";

import { CardHome } from "../../components/cardHome/index.jsx";
import { ModalPalindromo } from "../../components/modalPalindromos/index.jsx";
import { ModalCars } from "../../components/modalCars/index.jsx";
import { ModalMotorCycle } from "../../components/modalMotorCycle/index.jsx";
import { ModalSale } from "../../components/modalSale";
import { useNavigate } from "react-router-dom";

import Calculadora from "../../assets/images/calc.jpeg";
import Carro from "../../assets/images/car.png";
import Moto from "../../assets/images/moto.png";
import Cep from "../../assets/images/cep.png";
import Venda from "../../assets/images/sale.png";

const HomePage = () => {
  const {
    isOpen: isOpenModalPalindromes,
    onOpen: onOpenModalPalindromes,
    onClose: onCloseModalPalindromes,
  } = useDisclosure();
  const {
    isOpen: isOpenModalSales,
    onOpen: onOpenModalSales,
    onClose: onCloseModalSales,
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
      callback: onOpenModalPalindromes,
    },
    { name: "Cadastro de carros", image: Carro, callback: onOpenModalCars },
    {
      name: "Cadastro de motos",
      image: Moto,
      callback: onOpenModalMotorcycle,
    },
    {
      name: "Buscar por cep",
      image: Cep,
      callback: () => navigate("/search/cep"),
    },
    {
      name: "Calculadora de vendas",
      image: Venda,
      callback: onOpenModalSales,
    },
  ];

  return (
    <>
      <Center
        position="relative"
        w="100vw"
        h="100vh"
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
        <ModalSale isOpen={isOpenModalSales} onClose={onCloseModalSales} />

        <Heading
          fontFamily="Roboto mono"
          color="#3E506C"
          marginBottom="5%"
          fontSize="50px"
          borderBottom="4px solid"
          borderColor="#3E506C"
        >
          Utilitarios
        </Heading>
        <Flex
          w="85%"
          h="70%"
          marginBottom="10%"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {cardsInfo.map((info) => (
            <CardHome
              name={info.name}
              image={info.image}
              callback={info.callback}
            />
          ))}
        </Flex>
      </Center>
    </>
  );
};

export { HomePage };
