import { FC } from 'react';
import DiscountItem from "./DiscountItem.component";
import { DiscountItemProps } from "@components/DiscountItem/DiscountItem";

const DiscountItemContainer: FC<DiscountItemProps> = ({image, children, ...restProps}) => {
    return (
        <DiscountItem image={image} {...restProps}>
            {children}
        </DiscountItem>
    )
}

export default DiscountItemContainer;