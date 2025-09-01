import React from 'react'
import { SectionContainer } from '../../common/SectionContainer'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Mail, Phone, Twitter } from 'lucide-react'

const ContactSection = () => {
    return (
        <SectionContainer
            className={"!bg-[#12141d] whitespace-nowrap !text-white !text-lg font-bold"}
            id="cta-ride"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-10 xl:divide-x divide-slate-300">
                <Link className='' href={'/'}>
                    <Image src={'/assets/imgs/logo.png'} width={115} height={100} alt="logo" />
                </Link>
                <div className="flex items-center xl:justify-center gap-2">
                    <Phone className="size-4" />
                    <p className="">1-800-123-4567</p>
                </div>
                <div className="flex items-center xl:justify-center gap-2">
                    <Mail className="size-4" />
                    <p className="">contact@aeso-site.com</p>
                </div>
                <div className="flex items-center xl:justify-center gap-2">
                    <div className="siz-8 p-1.5  border-white cursor-pointer border-2 flex items-center justify-center rounded-full">
                        <Facebook className="size-3.5 fill-white" />
                    </div>
                    <div className="siz-8 p-1.5  border-white cursor-pointer border-2 flex items-center justify-center rounded-full">
                        <Twitter className="size-3.5 fill-white" />
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default ContactSection