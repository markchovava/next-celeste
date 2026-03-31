import { NavInterface } from "../entity/NavEntity"
import { ServiceInfoData } from "./ServiceData"

export const WhatWeDoData: NavInterface[] = [
    {id: 1, name: 'Software', href:'/what-we-do/software', isOpen: false, items: []},
    {id: 2, name: 'Fixed Assets', href:'/what-we-do/fixed-assets', isOpen: false, items: []},
    {id: 3, name: 'General Consulting', href:'/what-we-do/general-consulting', isOpen: false, items: []},
]

const i = ServiceInfoData.services;
export const ServiceData = [
    {id: 1, name: i[0].name, href: i[0].href, isOpen: false, items: []},
    {id: 2, name: i[1].name, href: i[1].href, isOpen: false, items: []},
    {id: 3, name: i[2].name, href: i[2].href, isOpen: false, items: []},
    {id: 3, name: i[3].name, href: i[3].href, isOpen: false, items: []},
    {id: 3, name: i[4].name, href: i[4].href, isOpen: false, items: []},
    {id: 3, name: i[5].name, href: i[5].href, isOpen: false, items: []},
] 


export const MainNavData: NavInterface[] = [
    {id: 1, name: 'Home', href:'/', isOpen: false, items: []},
    {id: 2, name: 'About Us',  href:'/about', isOpen: false, items: []},
    {id: 3, name: 'Our Services',  href:'/service', isOpen: false, items: []},
    {id: 4, name: 'Contact Us',  href:'/contact', isOpen: false, items: []},
]

export const PrimaryNavData: NavInterface[] = [
    {id: 1, name: 'Home', href:'/', isOpen: false, items: []},
    {id: 2, name: 'About Us',  href:'/about', isOpen: false, items: []},
    {id: 3, name: 'Our Services',  href:'/what-we-do', isOpen: false, items: ServiceData},
    {id: 4, name: 'Contact Us',  href:'/contact', isOpen: false, items: []},
]

export const FixedAssetsData: NavInterface[] = [
    {id: 1, name: 'Fixed Assets Tags', href:'/what-we-do#one', isOpen: false, items: []},
    {id: 2, name: 'Fixed Assets Tagging Solutions', href:'/what-we-do#two', isOpen: false, items: []},
    {id: 3, name: 'Assets Value Added Services', href:'/what-we-do#three', isOpen: false, items: []},
    {id: 4, name: 'FA Management Systems', href:'/what-we-do#four', isOpen: false, items: []},
    {id: 5, name: 'Beyond Fixed Assets Tagging', href:'/what-we-do#five', isOpen: false, items: []},
    {id: 6, name: 'Custom Software Development', href:'/what-we-do#six', isOpen: false, items: []},
]


export const FooterData: NavInterface[] = [
    {id: 1, name: 'Privacy', href:'/privacy', isOpen: false, items: []},
    {id: 2, name: 'Terms of Use', href:'/terms-of-use', isOpen: false, items: []},
    {id: 3, name: 'Cookies Policy', href:'/cookie-policy', isOpen: false, items: []},
]


export const SocialData: NavInterface[] = [
    {id: 1, name: 'facebook', href:'https://www.facebook.com/celesteenergyzw', isOpen: false, css: 'text-blue-600', items: []},
    {id: 2, name: 'whatsapp', href:'https://www.instagram.com/celesteenergyzw', css: 'text-green-600', isOpen: false, items: []},
    {id: 3, name: 'linkedin', href:'#', css: 'text-blue-800', isOpen: false, items: []},
    {id: 4, name: 'twitter', href:'#', css: 'text-black', isOpen: false, items: []},
    {id: 5, name: 'instagram', href:'#', css: 'text-pink-600', isOpen: false, items: []},
    {id: 6, name: 'tiktok', href:'#', css: 'text-purple-800', isOpen: false, items: []},
]
