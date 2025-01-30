"use client";

import {
  FieldsetContent,
  FieldsetRoot,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import SideImage from "@images/fruit-3.png";
import { Field } from "@components/chakra-ui/field";
import { Button } from "@components/chakra-ui/button";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Icon } from "@iconify/react";

function Login() {
  const {data: session} = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (response?.error) {
      setError("Invalid credentials. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Flex w="full" h="full">
      <Stack alignItems="center" justifyContent="center" w="100%">
        <Heading fontSize="2xl" fontWeight="bold">
          {session ? `Welcome, ${session.user?.name}!` : "Welcome Back 👋"}
        </Heading>
        <Text>
          {session
            ? "You are signed in. Manage your projects with ease."
            : "Today is a new day. Sign in to start managing your orders."}
        </Text>

        {session ? (
          <Button p={4} bg="red.500" color="white" onClick={() => signOut()}>
            Sign Out
          </Button>
        ) : (
          <form onSubmit={handleSubmit}>
            <FieldsetRoot size="lg" maxW="md">
              <FieldsetContent>
                <Field label="Email">
                  <Input
                    px={4}
                    outline="solid"
                    outlineWidth="1px"
                    outlineColor="gray"
                    name="email"
                    type="email"
                    required
                  />
                </Field>
                <Field label="Password">
                  <Input
                    px={4}
                    outline="solid"
                    outlineWidth="1px"
                    outlineColor="gray"
                    name="password"
                    type="password"
                    required
                  />
                </Field>
                {error && <Text color="red.500">{error}</Text>}
              </FieldsetContent>
              <Button
                mt={4}
                mx="auto"
                p={4}
                type="submit"
                bg="bg.inverted"
                color="bg"
                alignSelf="flex-start"
                disabled={loading}
              >
                {loading
                  ? <Icon className="animate-spin" icon="gg:spinner" width="60" height="60"/>
                  : "Login"
                }
              </Button>
            </FieldsetRoot>
          </form>
        )}
      </Stack>
      <Image
        className="w-full h-full object-fill"
        src={SideImage}
        alt="side image"
      />
    </Flex>
  );
}

export default Login;
