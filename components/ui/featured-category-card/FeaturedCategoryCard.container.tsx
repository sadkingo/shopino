import { FC } from 'react';
import FeaturedCategoryCard from "./FeaturedCategoryCard.component";

const FeaturedCategoryCardContainer: FC<FeaturedCategoryCardProps> = (props) => {
  return (
    <FeaturedCategoryCard {...props}/>
  )
}

export default FeaturedCategoryCardContainer;