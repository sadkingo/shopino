import {FC} from 'react';
import Image from "next/image";
import Apple from "@images/apple.png"
import {Flex} from "@chakra-ui/react";

const DiscountItem: FC = () => {
    return (
        <Flex w="full">
            <Image className="w-20 h-20 object-cover rounded-2xl border border-blue-400 bg-white" src={Apple} alt="apple product" />
        </Flex>
    )
}

export default DiscountItem;