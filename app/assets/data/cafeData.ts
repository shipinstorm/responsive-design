import coffee1 from '~/assets/images/coffee-1.jpeg';
import coffee2 from '~/assets/images/coffee-2.jpeg';
import coffee3 from '~/assets/images/coffee-3.jpeg';
import coffee4 from '~/assets/images/coffee-4.jpeg';
import coffee5 from '~/assets/images/coffee-5.jpeg';
import coffee6 from '~/assets/images/coffee-6.jpeg';
import coffee7 from '~/assets/images/coffee-7.jpeg';
import coffee8 from '~/assets/images/coffee-8.jpeg';
import coffee9 from '~/assets/images/coffee-9.jpeg';
import coffee10 from '~/assets/images/coffee-10.jpeg';
import type { ICard } from '~/components/Card';

const randomStar = () => {
    const minStar = 1;
    const maxStar = 5;
    return Math.floor(Math.random() * (maxStar - minStar + 1) + minStar);
};

export const cafeData: Array<ICard> = [
    {
        index: 0,
        name: 'Altstadtcafé Cöpenick',
        description:
            'Dieses traditionsreiche Café gibt es bereits seit 20 Jahren und hat vieles von seinem nostalgischen Charme aus den 90er Jahren behalten. Hier sitzt ihr in dem gemütlichen Café oder auf der kleinen Terrasse mit Blick auf die Dahme. Zu dem Kaffee gibt es eine hausgemachte Kuchenkreation oder einen herzhaften Snack. ',
        address: 'Alt-Köpenick 16, Köpenick',
        stars: randomStar(),
        imageSrc: coffee1,
        imageAlt: 'coffee1',
    },
    {
        index: 1,
        name: 'Kaffee A.horn',
        description:
            'Das Kaffee A.horn ist ein Familienbetrieb, der Wert auf regionale Zutaten liegt. Alles, was angeboten wird, wird jeden Tag frisch gekocht, gebacken und geröstet. Auf der Speisekarte steht Frühstück, Lunch, Kuchen und Abendbrot. Hinter dem Gastraum werden Fahrräder repariert.',
        address: 'Carl-Herz-Ufer 9, Kreuzberg',
        stars: randomStar(),
        imageSrc: coffee2,
        imageAlt: 'coffee2',
    },
    {
        index: 2,
        name: 'Betty’n’Caty',
        description:
            'Schon ein echter Kiezliebling – das Betty’n’Caty in Prenzlauer Berg serviert euch leckeres Frühstück und guten Kaffee. Besonders beliebt sind der Avocado-Toast. Nachmittags gibt es leckeren Kuchen. Viele Speisen sind vegetarisch/vegan und/oder glutenfrei.',
        address: 'Knaackstr. 26, Prenzlauer Berg',
        stars: randomStar(),
        imageSrc: coffee3,
        imageAlt: 'coffee3',
    },
    {
        index: 3,
        name: 'The visit Coffee Roastery',
        description:
            'Kaffeebohnen von höchster Qualität, die perfekte Röstungsmethode und leidenschaftliche Menschen – das ist die einfache Formel des The visit. Und diese zahlt sich aus: der Kaffee schmeckt wunderbar. Das Café gibt’s mehrmals in Berlin, der Laden ist im Industrial Style eingerichtet. Zum leckeren Kaffee gibt es viele leckere Snacks wie Bananenbrot und Ei-Avocado-Brot.',
        address: 'Adalbertstraße 9, Kreuzberg',
        stars: randomStar(),
        imageSrc: coffee4,
        imageAlt: 'coffee4',
    },
    {
        index: 4,
        name: 'Patisserie Jubel',
        description:
            'Auf der Hufelandstraße im Bötzowkiez findet ihr die kleine, aber feine Patisserie Jubel. Das Team serviert euch hier sensationelle kleine Törtchen in verschiedenen Größen und kunstvoll angerichtet. Die Sorten variieren regelmäßig – im Sommer gibt es Melone, Ziegenfrischkäse, Zitrone und im Winter Minze Pastinake, Mohn, Physalis und Passionsfrucht.',
        address: 'Hufelandstraße 10, Prenzlauer Berg',
        stars: randomStar(),
        imageSrc: coffee5,
        imageAlt: 'coffee5',
    },
    {
        index: 5,
        name: 'Berliner Kaffeerösterei',
        description:
            'Schon bevor ihr die Berliner Kaffeerösterei seht, werdet ihr sie riechen: Der Duft nach frischgerösteten Kaffee strömt bis auf die Straße. Hier könnt ihr euch mit wahnsinnig guten Kaffeebohnen für zuhause eindecken oder euch ins angeschlossene Café setzen und direkt vor Ort eine Kaffeespezialität zusammen mit leckerem Kuchen probieren.',
        address: 'Uhlandstraße 173 / 174, Wilmersdorf',
        stars: randomStar(),
        imageSrc: coffee6,
        imageAlt: 'coffee6',
    },
    {
        index: 6,
        name: 'The Barn ',
        description:
            'Das ehemalige Café Kranzler am Kurfürstendamm ist inzwischen The Barn. Hier wird euch bei einem 360 Grad-Blick über das West-Berliner Zentrum exzellenter Kaffee serviert. Außerdem könnt ihr euch hausgemachten Kuchen und saisonale Leckerbissen schmecken lassen. Im Sommer könnt ihr auf dem Balkon oder der Dachterrasse Platz nehmen und mitten in Berlin entspannen.',
        address: 'Kurfürstendamm 18, Charlottenburg',
        stars: randomStar(),
        imageSrc: coffee7,
        imageAlt: 'coffee7',
    },
    {
        index: 7,
        name: 'Barcomi’s',
        description:
            'Vor über 20 Jahren eröffnet und immernoch beliebt ist das Barcomi’s. Auch hier wird der Kaffee selbst geröstet – dazu gibt’s leckere Kuchen, Muffins und Bagels, die täglich frisch gebacken werden. Dabei könnt ihr dem Treiben auf der Kreuzberger Bergmannstraße zusehen.',
        address: 'Varziner Straße 4, Schöneberg',
        stars: randomStar(),
        imageSrc: coffee8,
        imageAlt: 'coffee8',
    },
    {
        index: 8,
        name: 'Süßkramdealer',
        description:
            'Das An einem Sonntag im August ist ein echter Klassiker, der schon lange in gemütlicher Atmosphäre Frühstück, Kaffee und Kuchen sowie die (fast) besten Veggieburger im Kiez serviert. Es gibt einen großen Außenbereich mit Hollywoodschaukeln.',
        address: 'Kastanienallee 103, Prenzlauer Berg',
        stars: randomStar(),
        imageSrc: coffee9,
        imageAlt: 'coffee9',
    },
    {
        index: 9,
        name: 'An einem Sonntag im August',
        description:
            'Das An einem Sonntag im August ist ein echter Klassiker, der schon lange in gemütlicher Atmosphäre Frühstück, Kaffee und Kuchen sowie die (fast) besten Veggieburger im Kiez serviert. Es gibt einen großen Außenbereich mit Hollywoodschaukeln.',
        address: 'Kastanienallee 103, Prenzlauer Berg',
        stars: randomStar(),
        imageSrc: coffee10,
        imageAlt: 'coffee10',
    },
];
