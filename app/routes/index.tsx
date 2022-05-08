import { useMemo } from 'react';

import { Grid } from '~/components/Grid';

export default function Index() {
    const maxWidthStyle = useMemo(() => ({ maxWidth: '1920px' }), []);
    return (
        <main className="flex min-h-screen justify-center bg-orange-100 py-16">
            <div style={maxWidthStyle}>
                <div className="pb-16 pl-8 xl:pl-16">
                    <h1 className="text-5xl font-bold text-gray-800">Cafés in Berlin</h1>
                </div>
                <Grid />
            </div>
        </main>
    );
}
