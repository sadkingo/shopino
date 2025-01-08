import { FC } from 'react';
import DiscountItem from "./DiscountItem.component";
import { DiscountItemProps } from "@components/DiscountItem/DiscountItem";

const DiscountItemContainer: FC<DiscountItemProps> = ({image, ...restProps}) => {
    return (
        <DiscountItem image={image} {...restProps}/>
    )
}

export default DiscountItemContainer;