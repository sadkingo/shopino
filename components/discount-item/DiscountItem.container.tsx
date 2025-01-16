import { FC } from 'react';
import DiscountItem from "./DiscountItem.component";
import { DiscountItemProps } from "@components/discount-item/DiscountItem";

const DiscountItemContainer: FC<DiscountItemProps> = ({image, coupon, date, ...restProps}) => {
    return (
        <DiscountItem image={image} coupon={coupon} date={date} {...restProps}/>
    )
}

export default DiscountItemContainer;