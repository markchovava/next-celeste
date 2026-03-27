export interface NavInterface{
    id: number | string 
    name: string
    href: string
    isOpen: boolean
    items: NavInterface[]
    css?: string
}



export const NavEntity: NavInterface = {
    id: "", 
    name: '', 
    href: '', 
    isOpen: false, 
    items: [],
    css: '',
}