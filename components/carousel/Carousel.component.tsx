import React, { FC } from 'react'
import { Carousel as CarouselComponent } from "react-responsive-carousel";

import { CarouselProps } from './Carousel';
import colors from '@/config/colors';
import { indicatorStyles } from './Carousel.config';

const Carousel: FC<CarouselProps> = ({ children }) => {
    return (
        <CarouselComponent
            className="m-2 min-w-[400px] max-w-[800px]"
            autoPlay
            interval={3000}
            transitionTime={1000}
            showStatus={false}
            showArrows={false}
            infiniteLoop
            emulateTouch
            renderIndicator={renderIndicator}
            showThumbs={false}
        >
            {children}
        </CarouselComponent>
    )

    function renderIndicator(
        onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
        isSelected: boolean,
        index: number,
        label: string
    ) {
        if (isSelected) {
            return (
                <li
                    style={{ ...indicatorStyles, background: colors.medium }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                />
            );
        }
        return (
            <li
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
            />
        );
    }
}

export default Carousel