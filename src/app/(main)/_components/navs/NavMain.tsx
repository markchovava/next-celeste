"use client"

import Link from "next/link"
import { useMainNavStore } from "../../_store/useMainNavStore"
import IconDefault from "@/_components/icons/IconDefault"
import { NavInterface } from "../../_data/entity/NavEntity"



export default function NavMain() {
    const { navList } = useMainNavStore()
    return (
        <ul className='flex items-center justify-start gap-4 text-gray-600 font-medium'>
            {navList.map((i, key) => (
                <NavItem 
                    key={key} 
                    data={i} />
            ))}
        </ul>
    )
}



interface pInterface {
    data: NavInterface
}

function NavItem({ data }: pInterface) {
    const { id, name, href, items } = data
    const { setCurrent, current } = useMainNavStore()

    const handleClick = () => {
        setCurrent(data)
    }

    if (items.length > 0) {
        return (
            <li className="relative group">
                <button
                    type="button"
                    onClick={handleClick}
                    className={`${current.id == id ? 'text-blue-700' : ''} cursor-pointer flex items-center justify-center gap-1 hover:text-blue-700 transition-colors duration-200`}
                >
                    {name}
                    {/* Rotate chevron on hover via group */}
                    <span className="transition-transform duration-200 group-hover:rotate-180">
                        <IconDefault type="down" css="" />
                    </span>
                </button>

                {/* Dropdown — pt-2 creates visual gap via padding so hover area stays connected */}
                <ul className={`
                    absolute top-full left-0 min-w-[160%] w-max pt-2
                    z-50
                    origin-top
                    transition-all duration-200 ease-out
                    opacity-0 -translate-y-2 scale-95 pointer-events-none
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto
                `}>
                    <div className="rounded-lg overflow-hidden bg-white shadow-lg border border-gray-100">
                        {items.map((i, key) => (
                            <li key={key}>
                                <Link
                                    href={i.href}
                                    className="block cursor-pointer hover:bg-gray-50 hover:text-blue-700 px-4 py-2 text-sm transition-colors duration-150"
                                >
                                    {i.name}
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
            </li>
        )
    } else {
        return (
            <li>
                <Link
                    href={href}
                    onClick={handleClick}
                    className={`${current.id == id ? 'text-blue-800' : ''} hover:text-blue-700 cursor-pointer transition-colors duration-200`}
                >
                    {name}
                </Link>
            </li>
        )
    }
}