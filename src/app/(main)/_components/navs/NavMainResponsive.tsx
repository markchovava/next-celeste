"use client"
import { useMainNavStore } from '../../_store/useMainNavStore'
import { NavInterface } from '../../_data/entity/NavEntity'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import SocialNav from './SocialNav'



export default function NavMainResponsive() {
    const {navList, isMenu} = useMainNavStore()
  return (
    <AnimatePresence>
        {
        isMenu &&
        <motion.ul 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='w-full border-t border-gray-300'>
            {navList.map((i, key) => (
                <NavItem key={key} data={i} />
            ))}
            <li className='flex items-center justify-center py-4'><SocialNav /></li>
        </motion.ul>
        }
    </AnimatePresence>
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

   
    return (
        <Link href={href}>
            <li onClick={handleClick} className={`${current.id == id ? 'bg-gray-100' : ''} font-medium text-gray-800 w-full 
                cursor-pointer py-2 text-center border-b border-gray-300 hover:bg-gray-100`}>
                {name}
            </li>
        </Link>
    )
    
}
