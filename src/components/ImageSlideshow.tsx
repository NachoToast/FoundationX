import { useCallback, useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, virtualize, SlideRendererCallback } from 'react-swipeable-views-utils';

const widthFn = () => Math.floor(window.innerWidth / 2);
const heightFn = () => Math.floor((window.innerWidth * (9 / 16)) / 2);

function mod(n: number, m: number) {
    const q = n % m;
    return q < 0 ? q + m : q;
}

const VirtualizeSwipeableViews = virtualize(autoPlay(SwipeableViews));

const ImageSlideshow = ({ imagesA, imagesB }: { imagesA: string[]; imagesB: string[] }) => {
    const [width, setWidth] = useState(widthFn());
    const [height, setHeight] = useState(heightFn());
    const [startFirst, setStartFirst] = useState(false);
    const [startSecond, setStartSecond] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(widthFn());
            setHeight(heightFn());
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const delayA = Math.floor(Math.random() * 5);
        const delayB = delayA + Math.floor(Math.random() * 3);

        const timeoutA = setTimeout(() => setStartFirst(true), delayA * 1000);
        const timeoutB = setTimeout(() => setStartSecond(true), delayB * 1000);

        return () => {
            clearTimeout(timeoutA);
            clearTimeout(timeoutB);
        };
    }, []);

    const slideRenderer = useCallback<(imageSet: string[]) => SlideRendererCallback>(
        (imageSet) => (params) => {
            const { index, key } = params;

            const actualIndex = mod(index, imageSet.length);

            return <img key={key} src={imageSet[actualIndex]} style={{ height: `${height}px` }} />;
        },
        [height],
    );

    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <VirtualizeSwipeableViews
                autoPlay={startFirst}
                enableMouseEvents
                slideRenderer={slideRenderer(imagesA)}
                style={{ height: `${height}px`, width: `${width}px`, overflow: 'hidden' }}
            />
            <VirtualizeSwipeableViews
                autoplay={startSecond}
                enableMouseEvents
                slideRenderer={slideRenderer(imagesB)}
                style={{ height: `${height}px`, width: `${width}px`, overflow: 'hidden' }}
            />
        </div>
    );
};

export default ImageSlideshow;
