import { NoImage } from "@/_data/sample/NoImage"


export const ServiceInfoData = {
    image: '/assets/img/banner/10.jpg',
    href: '/service',
    title: 'Our Service',
    subtitle: 'What we do?',
    intro: <>
        <p className="mb-2">
            We specialize in solar  technology, Celeste Energy offers innovative products 
            and services designed to meet the growing demand for clean, renewable energy. 
        </p>
        <p className="mb-2">
            We specialize in solar  technology, Celeste Energy offers innovative products 
            and services designed to meet the growing demand for clean, renewable energy. 
            We specialize in solar  technology, Celeste Energy offers innovative products 
            and services designed to meet the growing demand for clean, renewable energy. 
        </p>
    </>,
    details: <></>,
    services: [
        { 
            id: 1, 
            name: 'Residential Solar Installation', 
            slug: 'residential-solar-installation',
            image: `/assets/img/services/07.jpg`,
            href: '/service/residential-solar-installation',
        },
        { 
            id: 2, 
            name: 'Commercial Solar Installation', 
            slug: 'commercial-solar-installation',
            image: `/assets/img/services/13.jpg`,
            href: '/service/commercial-solar-installation',
        },
        { 
            id: 3, 
            name: 'Solar Borehole Installation', 
            slug: 'solar-borehole-installation',
            image: `/assets/img/services/03.jpg`,
            href: '/service/solar-borehole-installation',
        },
        { 
            id: 4, 
            name: 'Water Purification', 
            slug: 'water-purification',
            image: `/assets/img/services/16.jpg`,
            href: '/service/solar-borehole-installation',
        },
        { 
            id: 5, 
            name: 'Storage & Distribution', 
            slug: 'storage-and-distribution',
            image: `/assets/img/services/15.jpg`,
            href: '/service/storage-and-distribution',
        },
        { 
            id: 6, 
            name: 'Irrigation', 
            slug: 'irrigation',
            image: `/assets/img/services/09.jpg`,
            href: '/service/irrigation',
        }
    ]
}


export const ServiceImageData = [
    {id: 1, image: NoImage},
    {id: 2, image: NoImage},
    {id: 3, image: NoImage},
    {id: 4, image: NoImage}
]


