import { useMemo, useState } from 'react';

import { Dropdown } from '~/components/Dropdown';
import { Grid } from '~/components/Grid';

export enum SortEnum {
    DEFAULT = 'DEFAULT',
    NAME = 'NAME',
    ADDRESS = 'ADDRESS',
    STARS = 'STARS',
}

export default function Index() {
    const maxWidthStyle = useMemo(() => ({ maxWidth: '1920px' }), []);

    const [activeSort, setActiveSort] = useState<SortEnum>(SortEnum.DEFAULT);
    const items = useMemo(() => Object.values(SortEnum), []);

    return (
        <main className="flex min-h-screen justify-center bg-orange-100 py-16">
            <div style={maxWidthStyle}>
                <div className="mx-8 mb-16 flex flex-wrap items-center justify-between xl:mx-16">
                    <h1 className="text-5xl font-bold text-gray-800">Cafés in Berlin</h1>
                    <div className="my-4">
                        <Dropdown<SortEnum> active={activeSort} onClick={setActiveSort} items={items} />
                    </div>
                </div>
                <Grid<SortEnum> sort={activeSort} />
            </div>
        </main>
    );
}
