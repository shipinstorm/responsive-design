import React, { useMemo } from 'react';

export interface ICard {
    name: string;
    description: string;
    address: string;
    stars: number;
    imageSrc: string;
    imageAlt: string;
}

export const Card: React.FC<ICard> = ({ name, description, address, stars, imageSrc, imageAlt }) => {
    const rendererStars = useMemo(() => new Array(stars).fill(null).map(() => '⭐️'), [stars]);

    const flex = 'flex flex-col xl:flex-row items-center xl:items-stretch';
    const hover = 'contrast-75 transition duration-150 ease-in hover:contrast-100 focus:contrast-100';

    return (
        <figure className={`${flex} rounded-3xl bg-orange-300 ${hover}`}>
            <img
                className="w-4/4 rounded-t-3xl object-cover xl:w-2/4 xl:rounded-l-3xl xl:rounded-tr-none"
                src={imageSrc}
                alt={imageAlt}
            />
            <div className="p-6 md:p-8 md:text-left">
                <blockquote>
                    <p className="text-lg font-medium">"{description}"</p>
                </blockquote>
                <div className="mt-2 flex justify-between">
                    <figcaption className="font-3medium">
                        <div className="text-yellow-800">{name}</div>
                        <div className="text-gray-700">{address}</div>
                    </figcaption>
                    <div className="pl-2">{rendererStars}</div>
                </div>
            </div>
        </figure>
    );
};
