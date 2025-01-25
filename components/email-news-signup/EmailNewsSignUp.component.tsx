import { FC } from 'react';
import * as React from 'react';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

const EmailNewsSignUp: FC = () => {
  return (
    <>
      <Heading fontSize="24px" mb="15px" className="yellow-gradient-color">
        Be the first to know
      </Heading>
      <Text color="gray.400" mb="15px">
        Get notified about the upcoming sessions, news, articles, jobs, and opensource projects.
      </Text>

      <form action="#">
        <Box position="relative">
          <Input
            type="email"
            required
            name="entry.1808449400"
            px="25px"
            height="50px"
            rounded="50px"
            bg={{_dark: 'gray.600', base: 'gray.900'}}
            _placeholder={{color: 'gray.300'}}
            placeholder="Enter your email"
            _focus={{outline: 0}}
            color="gray.100"
            borderWidth={0}
          />
          <Button
            type="submit"
            height="50px"
            color="gray.100"
            _hover={{bg: 'yellow.400', color: 'gray.900'}}
            position="absolute"
            top="0"
            right="0"
            bg="gray.700"
            rounded="50px"
            px="25px"
          >
            Subscribe
          </Button>
        </Box>
      </form>
    </>
  )
}

export default EmailNewsSignUp;