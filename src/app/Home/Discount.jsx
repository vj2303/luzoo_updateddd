
import Image from "next/image"

const Discount = () => {

    const steps = [
        {
            title: "Book your appointment",
            description: "Download the LUZO app and pick your favourite salon to book your appointment",
            image: "/img/3.svg"
        },
        {
            title: "Visit the salon",
            description: "Visit the salon to avail all the services you want",
            image: "/img/1.svg"
        },
        {
            title: "Pay with LUZO",
            description: "After completing your service at the salon, pay with any mode of online payment on the LUZO app",
            image: "/img/2.svg"
        },
    ]

    return (
        <div className="bg-[#ECF4FF]">


            <div className=" px-[10px] sm:px-[100px] py-[40px] max-w-[1400px] mx-auto">
                <h1 className="sm:text-center text-[26px] sm:text-[30px] font-bold">How to get the discount with the LUZO app?</h1>

                <div className="flex sm:flex-row items-start flex-col sm:gap-[70px] my-[20px]">

                    {
                        steps.map((step, i) => {
                            return <div className="flex items-center sm:flex-col gap-[10px]" key={i}>
                                <span className="flex flex-col items-center gap-1 w-[120px] sm:hidden">
                                    <Image src={step.image} width={90} height={90} alt='img' className="max-w-[90px] h-[90px] sm:w-[140px] sm:h-[140px]" />

                                    <Image src="/img/svg/line.svg" width={5} height={1} alt="line" className={`${i === steps.length - 1 ? "invisible" : "visible"} sm:invisible`} />
                                </span>
                                <Image src={step.image} alt="sdf" width={140} height={140} className="w-[140px] h-[140px] hidden sm:block" />
                                <span className="flex flex-col">
                                    <h1 className="text-[18px] sm:text-center font-medium sm:py-[10px]">{step.title}</h1>
                                    <p className="text-[15px] sm:text-center ">{step.description}</p>
                                </span>
                            </div>
                        })
                    }






                </div>

            </div>
        </div>
    )
}

export default Discount