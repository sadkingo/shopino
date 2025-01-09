import { FC } from 'react';
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import { colors } from "@/config/theme";
import { DiscountItemProps } from "@components/DiscountItem/DiscountItem";


const DiscountItem: FC<DiscountItemProps> = ({image, children, ...restProps}) => {
    return (
        <Flex p={2} justifyContent="start" {...restProps}>
            <Image width={100} height={100} className="w-[100px] h-[100px] object-cover rounded-2xl border bg-white"
                   src={image}
                   style={{borderColor: colors.light}} alt="product"/>
            {children}
        </Flex>
    )
}

export default DiscountItem;