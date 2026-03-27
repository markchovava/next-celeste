"use client"
import IconDefault from '@/_components/icons/IconDefault'
import { AppInfoData } from '../../_data/sample/AppInfoData'

export default function HeaderTop() {
  return (
    <header className='bg-white'>
        <section className={`container__primary flex lg:flex-row flex-col items-center justify-between 
            lg:gap-12 gap-2 lg:py-2 py-4 border-b border-gray-300`}>
            <div className='flex items-center justify-start gap-2'>
                <IconDefault type='phone' css='text-sky-700 text-sm' />
                <span className='text-sm text-gray-900'>{AppInfoData.phone}</span>
            </div>
            <div className='flex items-center justify-end gap-2'>
                <span className='text-sm text-gray-900'>{AppInfoData.email}</span>
                <IconDefault type='email' css='text-sky-700 text-sm' />
            </div>
        </section>
    </header>
  )
}
