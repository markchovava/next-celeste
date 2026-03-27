"use client"
import Link from 'next/link'
import { LogoData } from '../../_data/sample/LogoData'


interface PropInterface{
    size?: string
}

export default function Logo({size = 'w-auto h-16'}: PropInterface) {
  return (
    <Link href={LogoData.href}>
        <figure className={`${size}`}>
          <img src={LogoData.image} alt='Logo' className="w-full h-full object-fit" />
      </figure>
    </Link>
  )
}
