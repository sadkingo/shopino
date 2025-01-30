import { RefAttributes } from 'react';
import { StaticImageData } from 'next/image';
import { FlexProps } from "@chakra-ui/react";

type DiscountItemProps = FlexProps & RefAttributes<HTMLDivElement> & {
    image: StaticImageData | string;
    date: Date;
    coupon?: string
};