import React from 'react'
import { SocialData } from '../../_data/sample/MainNavData'
import Link from 'next/link'
import IconDefault from '@/_components/icons/IconDefault'

export default function SocialNav() {
  return (
    <div className='flex items-center justify-start gap-3'>
        {SocialData.map((i, key) => (
            <Link 
                key={key} 
                target='_blank'
                href={i.href}>
                <IconDefault
                    type={i.name} 
                    css={`${i.css} text-lg hover:scale-110 ease-in-out transition-all duration-all`} />
            </Link>
        ))}
    </div>
  )
}
