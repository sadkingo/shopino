import {FC} from 'react';
import Image from "next/image";
import Apple from "@images/apple.png"
import {Flex} from "@chakra-ui/react";
import { DiscountItemProps } from "@components/DiscountItem/DiscountItem";


const DiscountItem: FC<DiscountItemProps> = ({image , ...restProps}) => {
    return (
        <Flex p={2} w="full" justifyContent="start" {...restProps}>
            <Image className="w-20 h-20 object-cover rounded-2xl border bg-white" src={image} style={{ borderColor:colors.light }} alt="product" />
        </Flex>
    )
}

export default DiscountItem;