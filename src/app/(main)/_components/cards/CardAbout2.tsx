"use client"

import IconDefault from '@/_components/icons/IconDefault'
import { ReactNode } from 'react'

interface PropInterface{
    type: 'on' | 'off'
    title: string,
    details: ReactNode
}
export default function CardAbout2({
    type,
    title, 
    details
}: PropInterface) {

    switch(type){
        case 'on':
            return (
                <div className="bg-amber-500 px-5 py-6 rounded-2xl overflow-hidden">
                    <div className="flex items-start justify-start gap-2">
                        <div className="w-[20%] aspect-square rounded-full flex items-center justify-center  bg-blue-900">
                            <IconDefault type="star" css="text-white" />
                        </div>
                        <div>
                            <h6 className="text-2xl">{title}</h6>
                            <p className="font-light text-xl">
                                {details}
                            </p>
                        </div>
                    </div>
                </div>                 
            )
        case 'off':
            return (
                <div className="bg-blue-900 px-5 py-6 rounded-2xl overflow-hidden">
                    <div className="flex items-start justify-start gap-2">
                        <div className="w-[20%] aspect-square rounded-full flex items-center justify-center bg-amber-500">
                            <IconDefault type="star" css="text-white" />
                        </div>
                        <div>
                            <h6 className="text-2xl">{title}</h6>
                            <p className="font-light text-xl">
                                {details}
                            </p>
                        </div>
                    </div>
                </div>
            )
    }
  return (
    <div>CardAbout2</div>
  )
}
