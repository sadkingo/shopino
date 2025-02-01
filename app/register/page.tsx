"use client"

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { Box, Heading, Field, Input, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react"

import { Button } from "@components/chakra-ui/button";
import { handleAxiosError } from "@/lib/util/handleError";
import { toaster } from "@components/chakra-ui/toaster";
import FormatZodErrors, { zodVerificationErrorType } from "@/lib/util/formatZodErrors";

interface FormDataType {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone: string;
  address: string;
}

function Register() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<FormDataType>>({});
  const [globalError, setGlobalError] = useState<string>("");

  async function handleRegistration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setErrors({});
    setGlobalError("");
    const formData = new FormData(event.currentTarget);
    const normalizedFormData = Object.fromEntries(formData.entries());
    const {name, email, password, password_confirmation, phone, address} = normalizedFormData;
    try {
      await axios.post('/api/register', {
        name,
        email,
        password,
        password_confirmation,
        phone,
        address,
      })
      toaster.create({
        title: "Registration Successful",
        description: "You have been registered successfully.",
        type: "success",
        duration: 5000,
      })
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setGlobalError(e.response?.data.error);
        const response = e.response;
        const details = (response?.data as { details: zodVerificationErrorType[] }).details;
        if (details) {
          setErrors((FormatZodErrors(details)));
        }
        handleAxiosError(e as AxiosError);
      } else {
        // unknown error TODO: handle
        console.error(e);
      }
    }
    setLoading(false);
  }

  return <Box w="full" m="auto" py={8}>
    <Heading
      fontSize="2xl" fontWeight="bold" textAlign="center"
      mb="6"
    >
      Registration
    </Heading>
    <form
      className="w-full max-w-md mx-auto bg-white p-8 rounded-md dark:shadow-[0_0_12px_white] shadow-[0_0_12px_black]"
      onSubmit={handleRegistration}>
      <Text fontSize="xl" color="fg.error" textAlign="center">{globalError}</Text>
      {renderField("name", "Full Name")}
      {renderField("email", "Email")}
      <Flex alignItems="end" w="full" gap={3} smDown={{flexDir: "column"}}>
        {renderField("password", "Password", "password")}
        {renderField("password_confirmation", "Password Confirmation", "password")}
      </Flex>
      {renderField("phone", "Phone")}
      {renderField("address", "Address")}
      <Button
        w="full"
        bg={{base: "#6366f1", _hover: "#4f46e5"}}
        transition="backgroundColor 300ms"
        color="white" fontWeight="bold" fontSize="sm"
        px={4} py={2} mt={4}
        rounded="md"
        type="submit">{loading ? <Icon className="animate-spin" icon="gg:spinner" width="24" height="24"/> : "Register"}
      </Button>
    </form>
  </Box>

  function renderField(name: keyof FormDataType = "name", label: string, type = "text") {
    return (<Field.Root invalid={!!errors[name]}
                        mt={1}
                        display="flex" flexDir="column"
                        w="full"
    >
      <Field.Label
        color="gray.700" fontWeight="bold"
        htmlFor={name}>
        {label}
      </Field.Label>
      <Field.ErrorText>{errors[name]}</Field.ErrorText>
      <Input
        w="full" px="3" py="2"
        border="gray solid 1px" rounded="md"
        bg={{_dark: "black"}}
        _focus={{outline: "none", borderColor: "#6366f1"}}
        _invalid={{outline: "none", borderColor: "fg.error"}}
        type={type} id={name} name={name}/>
    </Field.Root>)
  }
}

export default Register;