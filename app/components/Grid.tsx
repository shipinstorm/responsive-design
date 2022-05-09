import React, { useMemo } from 'react';

import { cafeData } from '~/assets/data/cafeData';
import { Card } from '~/components/Card';
import { SortEnum } from '~/routes';

interface IGrid<TEnum> {
    sort: TEnum;
}

export const Grid = <TEnum extends string>({ sort }: IGrid<TEnum>) => {
    const renderedCards = useMemo(
        () =>
            cafeData
                .sort((a, b) => {
                    switch (sort) {
                        case SortEnum.NAME:
                            return a.name.localeCompare(b.name);
                        case SortEnum.ADDRESS:
                            return a.address.localeCompare(b.address);
                        case SortEnum.STARS:
                            return b.stars - a.stars;
                        case SortEnum.DEFAULT:
                        default:
                            return a.index - b.index;
                    }
                })
                .map(({ index, name, description, address, stars, imageSrc, imageAlt }) => (
                    <Card
                        index={index}
                        name={name}
                        description={description}
                        address={address}
                        stars={stars}
                        imageSrc={imageSrc}
                        imageAlt={imageAlt}
                        key={index}
                    />
                )),
        [sort]
    );

    return <div className="grid grid-cols-1 gap-8 md:mx-8 md:grid-cols-2 xl:mx-16 xl:gap-16">{renderedCards}</div>;
};
