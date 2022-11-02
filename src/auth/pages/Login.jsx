import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Container,
} from "@chakra-ui/react";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", { replace: true });
  };

  return (
    <Container>
      <Box>
        <Text>Login</Text>
      </Box>
      <Box>
        <Button
          onClick={handleLogin}
          fontSize={"sm"}
          fontWeight={600}
          color={"blackAlpha.700"}
          bg={"yellow.300"}
          href={"#"}
          _hover={{
            bg: "yellow.400",
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};
