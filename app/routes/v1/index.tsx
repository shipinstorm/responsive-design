import { useMemo } from 'react';

import type { IV1Card} from '~/routes/v1/V1Card';
import { V1Card } from '~/routes/v1/V1Card';

import coffee1 from '../../assets/images/coffee-1.jpeg';
import coffee2 from '../../assets/images/coffee-2.jpeg';
import coffee3 from '../../assets/images/coffee-3.jpeg';
import coffee4 from '../../assets/images/coffee-4.jpeg';
import coffee5 from '../../assets/images/coffee-5.jpeg';
import coffee6 from '../../assets/images/coffee-6.jpeg';
import coffee7 from '../../assets/images/coffee-7.jpeg';
import coffee8 from '../../assets/images/coffee-8.jpeg';
import coffee9 from '../../assets/images/coffee-9.jpeg';
import coffee10 from '../../assets/images/coffee-10.jpeg';

export default function Index() {
    const cards = useMemo<Array<IV1Card>>(
        () => [
            { src: coffee1, alt: 'coffee1' },
            { src: coffee2, alt: 'coffee2' },
            { src: coffee3, alt: 'coffee3' },
            { src: coffee4, alt: 'coffee4' },
            { src: coffee5, alt: 'coffee5' },
            { src: coffee6, alt: 'coffee6' },
            { src: coffee7, alt: 'coffee7' },
            { src: coffee8, alt: 'coffee8' },
            { src: coffee9, alt: 'coffee9' },
            { src: coffee10, alt: 'coffee10' },
        ],
        []
    );
    const renderedCards = useMemo(() => cards.map(({ src, alt }) => <V1Card src={src} alt={alt} key={alt} />), [cards]);

    return (
        <main className="min-h-screen bg-orange-300">
            <div className="grid gap-16 px-32 py-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {renderedCards}
            </div>
        </main>
    );
}
