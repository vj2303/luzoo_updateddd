import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const DownloadLinks = ({ className }) => {
    return (
        <>
            <div className={className + " flex gap-[10px] sm:hidden"}>
                <Link href='/loading'><Image src="/img/appstore.webp" alt="Image" width='150' height={150} /></Link>
                <Link href='/loading'><Image src="/img/playstore.webp" alt="Image" width='150' height={150} /></Link>
            </div>
            <div className={className + " sm:flex gap-[10px] hidden"}>
                <Link target="_blank" href='https://apps.apple.com/in/app/luzo-luxury-you-aspire/id1594592604'><Image src="/img/appstore.webp" alt="Image" width='150' height={150} /></Link>
                <Link target="_blank" href='https://play.google.com/store/apps/details?id=com.salon_surf&pli=1'><Image src="/img/playstore.webp" alt="Image" width='150' height={150} /></Link>
            </div>
        </>
    )
}

export default DownloadLinks