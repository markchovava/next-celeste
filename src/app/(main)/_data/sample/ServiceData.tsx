import { NoImage } from "@/_data/sample/NoImage"


export const ServiceInfoData = {
    image: '/assets/img/services/00.jpg',
    href: '/service',
    title: 'Our Services',
    subtitle: 'What we do?',
    breif: `We specialize in solar  technology, Celeste Energy offers innovative products 
            and services designed to meet the growing demand for clean, renewable energy. `,
    intro: <>
        <p className="mb-2">
            At Celeste Energy, we are dedicated to harnessing the power of the sun to provide 
            sustainable energy and water solutions that enhance quality of life. As a forward-thinking 
            leader in renewable technology, we offer a comprehensive suite of innovative products and 
            services designed to meet the growing global demand for clean energy.
        </p>
    </>,
    details: <></>,
    services: [
        { 
            id: 1, 
            name: 'Residential Solar Installation', 
            slug: 'residential-solar-installation',
            image: `/assets/img/services/03_solar.jpg`,
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
            name: 'Biogas Digester', 
            slug: 'biogas-digester',
            image: `/assets/img/services/01_digester.jpg`,
            href: '/service/biogas-digester',
        },
        { 
            id: 5, 
            name: 'Biogas Stove', 
            slug: 'biogas-stove',
            image: `/assets/img/services/02_stove.jpg`,
            href: '/service/biogas-stove',
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


