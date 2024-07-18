"use client"
import DownloadLinks from '@/components/DownloadLinks'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ScrollToTop from '@/components/ScrollToTop'
import DownloadPopUp from '@/components/DownloadPopUp'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import axios from 'axios'
import { ShimmerThumbnail } from "react-shimmer-effects";
// import { Metadata } from "next";


// export const metadata = {
//     metadataBase: new URL('https://www.luzo.app'),

//     title: 'All Salons | LUZO',
//     description: 'BBlunt is good salon | LUZO',
//   }

const Salon = () => {


    const [salon, setSalon] = useState(null)
    const { salonId } = useParams()


    const salons = [
        {
            id: 1,
            name: "BBlunt",
            route: "bblunt",
            image: "/SalonPhotos/bblunt.webp",
            description: ["BBlunt A leading brand that offers high-quality salon services for customers and is dedicated to providing their customers with the best possible experience by delivering exceptional value, quality, and customer service.", "Their salon services are designed to meet the unique needs of customers, and are committed to ensuring that their customers are satisfied with every interaction. They believe that everyone deserves the best, which is why they only use the finest and skilled professionals to create their salon services.", "Founded back in the early 90s, they understand Indian trends, colours, styles, and fashion like no one else. With years of experience and expertise with anything and everything to do with hair, they believe that copy pasting is just not an option. Deeply inspired by people who love to express their personality through their hair and are not afraid to experiment.", "With over 1 million haircuts and over 100 years behind the salon chair, they understand Indian hair and its needs like no one else. They are BBLUNT!"],
            branches: ["Kemps Corner, Mumbai", "Khar (West), Mumbai", "Juhu, Mumbai", "Colaba, Mumbai", "Chembur, Mumbai"]

        },
        {
            id: 2,
            name: "Lemon",
            route: "lemon",
            image: "/SalonPhotos/lemon.webp",
            description: ["LEMON is synonymous with quality beauty and hair solutions. They are on a mission to help our clients love themselves. Each time they step out of our salon, they should feel the best version of themselves. We believe in delivering an experience to remember. We pride ourselves on discreet, attentive care brought to our customers by one of the most directional teams of hair stylists and beauty therapists in the salon industry."],
            branches: ["Lokhandwala Market, Mumbai", "Versova, Mumbai", "Seven Bungalows, Mumbai", "Kandivali, Mumbai", "Mira Road, Mumbai", "Borivali, Mumbai", "Malad (West), Mumbai"]

        },
        {
            id: 3,
            name: "Harsha & Rakesh",
            route: "harsha-and-rakesh",
            image: "/SalonPhotos/HarshaRakesh.webp",
            description: ["Harsha & Rakesh is a professional luxury salon chain with expertise in hair-styling, skin, bridal makeup, tattoo, nail art & mehendi.", "They are a Kerastase certified salon, one of the things they take pride in and being one of the very few salons in India to have been certified by Kerastase Paris, they ensure to live up to the international standards of professional & luxury hair & beauty care.", "Whether it’s edgy and modern or sleek and elegant, they strive to create the perfect look for each individual client. They’re also determined to provide each and every client with the highest degree of customer service in a friendly and professional setting."],
            branches: ["Hubtown Premier, 4 Bunglows, Mumbai", "Shubham Building, Versova, Mumbai", "Inorbit Mall, Malad (West), Mumbai", "Bhoomi Classic, Malad (West), Mumbai", "Sheetal Building, Lokhandwala Market Entrance, Andheri (West), Mumbai", "Sukhmani Building, Juhu, Mumbai", "Satra Park, Borivali (West), Mumbai", "Prime Rose Building, Lokhandwala, Andheri (West), Mumbai", "Dhawalgiri Building, Lokhandwala, Andheri (West), Mumbai"]

        },

        {
            id: 4,
            name: "K Prive",
            route: "kprive",
            image: "/SalonPhotos/Kprive.webp",
            description: ["Kprive Salon is a professional beauty salon, we provide our clients with the latest beauty treatments and services to keep them looking their best. Team of highly skilled professionals of Kprive Salon is passionate about providing the best possible service to our clients. We are committed to delivering the very best service to all of our clients and believe that everyone deserves to feel beautiful. We are proud of the quality of service that we provide and look forward to welcoming you to the Kprive salon."],
            branches: ["Gamdevi", "Nepeansea Road (PDP)", "Nepeansea Road (Petit Hall)", "Peddar Road"]

        },
        {
            id: 5,
            name: "Fashion TV",
            route: "fashiontv",
            image: "/SalonPhotos/FTV.webp",
            description: ["It started as a way for people from the fashion industry to hang out, this led Michel Adam to come up with a channel dedicated 24*7 to fashion and this led to the birth of Fashion. With 20+ years in India and presence in more than 100 countries today, FashionTV is loved globally."],
            branches: ["Oshiwara"]

        },
        {
            id: 6,
            name: "Juice",
            route: "juice",
            image: "/SalonPhotos/juice,ghatkopar.webp",
            description: ["JUICE is one of India’s trendiest salon chains with 30+ branches spread internationally. In India, Juice has a widespread presence across metros and mini-metros catering to the beauty needs of ardent fashion followers, trendsetters and celebrities.", "This leading salon chain aims to bring the latest fashion trends and cutting-edge technology to their customers in a comfortable and sleek environment, using the best international products in the market. Hair stylists at JUICE believe that perfect beauty is different for every person which is why they do not mass produce but tailor-make a look, keeping in mind an individual’s features when conceiving their cut and colour.", "Their fundamental belief is that each customer is special and they work hard to make each one feel that before they walk out of their salon."],
            branches: ["Chinoy Mansion, Kemps Corner, Mumbai", "New Chandrodaya CHS, Ghatkopar (East), Mumbai", "Blue Fortuna, Andheri (East), Mumbai", "Sangam Solitaire, Kothrud, Pune"]

        },

        {
            id: 7,
            name: "The First",
            route: "the-first",
            image: "/SalonPhotos/TattvaSpa.webp",
            description: ["“The First” is an intimate salon in Pune that is favoured by a discerning clientele and fashion insiders.", "It is meant to be a discreet space that offers beauty editors superior services consistently with a happy and relentless attitude while standing within an affordable budget.", "As a new lifestyle concept, what they offer you is not just a luxury salon but a post-work retreat, a place to relax and what is more, the coffee here is to die for."],
            branches: ["Winterberry Purple, Koregaon Park, Pune", "VEN Business Centre, Baner, Pune"]

        },
        {
            id: 8,
            name: "BodyCraft",
            route: "bodycraft",
            image: "/SalonPhotos/BodyCraft.webp",
            description: ["Bodycraft understands the value of personal grooming and keeping up with the latest skin, hair and spa trends for a relaxed body.", "Get professional hair, skin and nail salon services by the best dermatologists, stylists and technician. They offer the best-in-class hair salon services like hair spa, haircut, hair colour and more using top quality hair products like System Professional and Sebastian from Wella.", "Let their salon experts take care of your skin for services like facial, waxing, clean up, bleaching and more, with international brands like Dermalogica, Ainhoa and Bodycraft’s skincare range, designed for the needs of Indian skin."],
            branches: ["Kukreja Arcade, Chembur, Mumbai"]

        },
        {
            id: 9,
            name: "Toni & Guy",
            route: "toni-and-guy",
            image: "/SalonPhotos/toninguy.webp",
            description: ["What makes TONI & GUY unique is their iconic brand with over five decades of experience. From the South of Italy to the South of London, North America, Asia and across the globe, Toni & Guy has become synonymous with quality hairdressing and innovation within the beauty industry."],
            branches: ["Tardeo, Mumbai", "Phoenix Marketcity, Viman Nagar, Pune"]

        },
        {
            id: 10,
            name: "LookWell",
            route: "lookwell",
            image: "/SalonPhotos/LookWell.webp",
            description: ["LookWell Salons is one of the leading premium beauty salon chains comprising 19 salons, 1 training academy & 1 Laser Clinic. With 200 trained Stylists, Therapist, Make-up artists, a professional salon management & corporate Team, LookWell caters to the beauty needs of 15000 customers every month.", "LookWell has partnered with world class brands such L'Oreal Paris, Moroccanoil of Israel, Naturica of Italy, Skeyndor of Spain, Thalgo of France and Peron Rigot from France, not only to offer the best products but has brought the world to their customers.", "They believe in excelling in the best and are constantly striving to ever improve their range of services for utmost customer satisfaction, which is for etched in their hearts and minds as to the ultimate tribute and reward to their customers."],
            branches: ["Hiranandani Meadows, Thane, Mumbai", "Michael Enclave, Mulund (West), Mumbai", "Vaibhav CHS, Dombivli, Mumbai", "Bindu Tower, Kalyan(West), Mumbai", "Shreeji Solitaire, Kalyan (West), Mumbai", "Tycoons Solitaire, Kalyan (West), Mumbai", "Pune Link Road Tisgaon Naka, Kalyan (East), Mumbai", "Nisarg Greens, Ambernath, Mumbai", "Kansai Section, Ambernath, Mumbai", "Vikas Galaxy, Badlapur (West), Mumbai", "Dwarkamai Residency, Badlapur (East), Mumbai", "GNP Arcadia, Dombivli (East), Mumbai", "Shreeram Plaza, Titwala, Mumbai", "GNP Galaxy, Ambernath, Mumbai", "Anantam Heights, Bhiwandi, Mumbai", "Millennium Hilton, New Panvel (East), Mumbai", "Godrej Hill, Kalyan (West), Mumbai", "Maansarovar, Thane (West), Mumbai", "Lakeshore Greens, Palava, Mumbai"]

        },
        {
            id: 11,
            name: "Femina Flaunt",
            route: "femina-flaunt",
            image: "/SalonPhotos/feminaflaunt.webp",
            description: ["Femina, a leading women's lifestyle magazine for over 60 years, has been capturing the essence of urban Indian women and celebrating Fashion, Beauty, and Lifestyle like no other. From showcasing the beauty icons and their styles over the years, the house of Femina now brings those Global Beauty trends, right next door with the launch of Femina FLAUNT Studio Salon."],
            branches: ["Powai, Mumbai", "Sanpada, Navi Mumbai", "Koregaon Park, Pune", "Viman Nagar, Pune", "Prabhat Road, Pune"]

        },
        {
            id: 12,
            name: "Tip & Toe",
            route: "tip-and-toe",
            image: "/SalonPhotos/timntoe.webp",
            description: ["Tip & Toe Nail Salon is all about the experience. A place to feel welcomed and special. A place to relax and feel a sense of indulgence. In other words, a place to celebrate YOU!", "Since opening our doors in 2011, Tip and Toe Nail Salon & Spa has earned a reputation for top-of-the-line services, unparalleled customer service, and a unique, welcoming atmosphere. Recently hailed as one of Mumbai’s best in the business in Nail-a-Thon, we have been blessed to be Rated #1 in India, and we continue to garner attention and praise from satisfied guests. Most preferred by the B-TOWN Celebrities & fashionistas, Tip and Toe is frequented by most of the A-listers."],
            branches: ["Bandra (West), Mumbai", "Juhu, Mumbai", "Peddar Road, Mumbai", "Infiniti Mall, Malad, Mumbai", "Borivali (West), Mumbai", "Phoenix Marketcity, Kurla, Mumbai"]

        },
        {
            id: 13,
            name: "JCO (Jean Claude Olivier)",
            route: "jco",
            image: "/SalonPhotos/JCO.webp",
            description: ["Spanish luxury salon Jean Claude Olivier, is present in 07 Countries which are namely :- Spain , Portugal , Andora, United States Of America, Puerto Rico, Korea and Mexico (with more than 50 open hairdressing salons around the World). Their main asset is a prestigious cadre of professionals specialised in aesthetic treatments and hairdressers. All of them have solid academic training and extensive experience."],
            branches: ["Bandra (W)"]
        },
        {
            id: 14,
            name: "JCB (Jean Claude Biguine)",
            route: "jcb",
            image: "/SalonPhotos/JCB.webp",
            description: ["Biguine India is a one-stop destination for all your grooming needs. Founded in 1982, Jean-Claude Biguine is one of the fastest-growing salon chains, to have successfully established over 400 salons across 20 countries. d Aligned with the global brand in both vision and quality, JCB India is the first-ever premium hair and beauty salon underlined with French Finesse.", "Jean-Claude Biguine is a ‘Maison de Beauté’ that takes pride in meeting your beauty needs with consistency and customization. Their top French experts work closely with trained Indian beauty professionals, to discover trends that perfectly complement Indian patrons.", "Instilled with a passion to deliver an unparalleled French experience in beauty, Jean-Claude Biguine is determined to curate an exclusive repertoire of hair and beauty services with cutting-edge technology and creative excellence."],
            branches: ["Maryland Apartment, Chembur (East), Mumbai", "135 Kwality House, Kemps Corner, Mumbai", "Jio World Drive, Bandra (East), Mumbai", "Springfield Building, Lokhandwala, Andheri (West), Mumbai", "Sea Sequence, Worli, Mumbai", "Infiniti Mall 2, Malad (West), Mumbai", "R City Mall, Ghatkopar (West), Mumbai", "Vishnu Shivam Mall, Kandivali (East), Mumbai", "Galleria Shopping Mall, Powai, Mumbai", "Notan Chambers, Pali Hill, Bandra (West), Mumbai", "Ambika Bungalow, Juhu, Mumbai", "Anisha Building, Aundh, Pune"]
        },
        {
            id: 15,
            name: "Tattva Spa",
            route: "tattva",
            image: "/SalonPhotos/TattvaSpa.webp",
            description: ["Prithivi, Akash, Jal, Agni, Vayu (Earth, Sky, Water, Fire, Air) are the five Tattva’s or elements that the universe and the human body is composed of.", "Ancient eastern philosophy holds that the balance of these five Tattvas or elements in entire universe, including the human body, is the essence of wellness.", "Balance. That is what Tattva Spa aims to strive for your mind, body and soul."],
            branches: ["The Pride Hotel, Shivajinagar, Pune", "Lemon Tree Premier, City Centre, Pune", "Four Points by Sheraton, Viman Nagar, Pune", "Courtyard by Marriott, Hinjewadi, Pune", "Radisson Blu, Kharadi, Pune", "Double Tree by Hilton, Chinchwad, Pune", "Radisson, Lonavala, Mumbai", "Novotel Imagica, Khopoli, Mumbai", "Radisson Blu, Karjat, Mumbai", "Novotel Hotel, Andheri (East), Mumbai", "Holiday Inn, Andheri (East), Mumbai", "Radisson Blu, Andheri (East), Mumbai", "Radisson Hotel, Goregaon (West), Mumbai", "Marriott Executive Apartments, Navi Mumbai, Mumbai"]

        },
        {
            id: 16,
            name: "Apple",
            route: "apple",
            image: "/SalonPhotos/Apple(The Original).webp",
            description: ["Apple Unisex Salon was incepted with a dream to not just change people’s appearances, but also to infuse their life with positivity and confidence.", "They offer premium quality hair and beauty services that enhance and enrich personalities.", "All their staff is highly trained and are professionals with years of experience who bring you the best style tips, recommendations, and services to ensure that your experience at Apple is truly relaxing, pampering, and fulfilling."],
            branches: ["Roopnagari Society, Kothrud, Pune", "Vision Galleria, Pimple Saudagar, Pune", "Acropolis, Aundh, Pune", "Power Point, Koregaon Park, Pune"]

        },

        {
            id: 17,
            name: "CocoMelon",
            route: "cocomelon",
            image: "/SalonPhotos/Apple(The Original).webp",
            description: ['Book a time at Cocomelon Salon & Spa for manicures, pedicures, massage, facials, hair botox, haircuts, hair color, skin treatments and IV Vita drips.', 'The best of Glutathione drips are available at Cocomelon. Hidden away in the heart of Mumbai lies the entrance to another world. A place where time seems to stand still and every moment is devoted to serenity.', 'The moment you step through the door, let all your senses unwind. Guided by their experienced team of therapists, reconnect your mind, body and spirit.'],
            branches: ["Woodrow Commercial Premises, Andheri (West), Mumbai", "Vision Galleria, Pimple Saudagar, Pune", "Acropolis, Aundh, Pune", "Power Point, Koregaon Park, Pune"]

        },

        {
            id: 18,
            name: "House Of Bumble",
            route: "houseofbumble",
            image: "/SalonPhotos/HouseOfBumble.webp",
            description: ['House Of Bumble Salon by Shackya in Pune is one of the leading businesses in the Beauty Salons.'],
            branches: ["Waterfront Condominiums, Kalyani Nagar, Pune", "Vasundhara Space, Aundh, Pune"]

        }




    ]


    const getData = async () => {
        // const foundSalon = salons.filter((ele) => {
        //     console.log(ele.id.toString(), title);
        //     return ele.id.toString() === title
        // })
        // setSalon(foundSalon[0])
        const id = salonId.split("-")[salonId.split("-").length-1]
        try {
            const res = await axios({
                method: "get",
                url: `${process.env.NEXT_PUBLIC_HOST}/api/v1/salonFamily/salonDetails?salonFamilyId=${id}`
            })
            setSalon(res.data.data)
            // console.log(res);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData()
    }, [salonId])
    return (
        <>
            <Navbar />
            {salon !== null ? <div>
                <div>
                    <Image src={salon.salons[0].salon_cover_photo} alt='img' width={2200} height={200} className="col-12 w-full rounded-4 aspect-w-16 aspect-h-9 h-[380px] object-fill" />

                    <div className="sm:px-[100px] px-[10px] sm:leading-[30px] ">
                        <h1 className=" text-[50px] py-[20px] sm:mt-[10px]">{salon.salons[0].salon_name}</h1>
                        <div>
                            <p className="text-[16px] sm:leading-[30px] my-[20px]">{salon.about}</p>
                        </div>
                    </div>

                    <div className="sm:px-[100px] px-[10px] my-[20px]">
                        <h1 className="font-medium sm:my-[20px] text-[20px]">{salon.name} Branches</h1>
                        <div className="flex sm:flex-row flex-col flex-wrap gap-[30px]">
                            {
                                salon.salons.map((ele) => {
                                    return <div key={ele} className="border sm:w-[30%]  text-[14px] border-[#B9B9B9] rounded px-[30px] py-[8px]  shadow-sm flex gap-[20px] items-center">
                                        <Image src="/img/pin.svg" alt='img' height={20} width={20} /><p className="py-[10px] ">{ele.salon_location}</p>  <span className='sm:hidden ml-auto'> <Link href="https://salons.luzo.app/igVKahpDgZHGNP3y9"><ChevronRight /></Link></span>
                                    </div>
                                })
                            }
                        </div>


                    </div>
                </div>
                <DownloadLinks className={"items-center justify-center mb-[60px] py-[15px]"} />
            </div> : (
                <ShimmerThumbnail height={250} rounded />
            )}


            <Footer />
            <ScrollToTop />
            <DownloadPopUp />
        </>
    )
}

export default Salon