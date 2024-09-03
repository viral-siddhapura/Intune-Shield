import Image from "next/image";

export const BusinessPartnersGrid = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-black font-bold text-3xl">
                <span>Trusted by Thousands Business</span>
            </p>
            <p className="text-black font-normal text-base mt-5">
                <span>More than 100,000+ teams are using Softuch</span>
            </p>

            {/* Grid layout */}
            <div className="grid grid-cols-5 gap-4 mt-10">
                <div className="flex flex-row items-center justify-center shadow-lg bg-white shadow-slate-300 px-14 py-6">
                    <Image src="/businessPartners/1.svg" alt={"business-partner-1"} width={90} height={34} />
                </div>
                <div className="flex flex-row items-center justify-center shadow-lg bg-white shadow-slate-300 px-14 py-6">
                    <Image src="/businessPartners/2.svg" alt={"business-partner-1"} width={90} height={34} />
                </div>
                <div className="flex flex-row items-center justify-center shadow-lg bg-white shadow-slate-300 px-14 py-6">
                    <Image src="/businessPartners/3.svg" alt={"business-partner-1"} width={90} height={34} />
                </div>
                <div className="flex flex-row items-center justify-center shadow-lg bg-white shadow-slate-300 px-14 py-6">
                    <Image src="/businessPartners/4.svg" alt={"business-partner-1"} width={90} height={34} />
                </div>
                <div className="flex flex-row items-center justify-center shadow-lg bg-white shadow-slate-300 px-14 py-6">
                    <Image src="/businessPartners/5.svg" alt={"business-partner-1"} width={90} height={34} />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-10 mb-10">
                <div className="flex flex-row items-center justify-center shadow-lg bg-white shadow-slate-300 px-14 py-6">
                    <Image src="/businessPartners/6.svg" alt={"business-partner-1"} width={100} height={31} />
                </div>
                <div className="flex flex-row items-center justify-center shadow-lg bg-white shadow-slate-300 px-14 py-6">
                    <Image src="/businessPartners/7.svg" alt={"business-partner-1"} width={55} height={46} />
                </div>
                <div className="flex flex-row items-center justify-center shadow-lg bg-white shadow-slate-300 px-14 py-6">
                    <Image src="/businessPartners/8.svg" alt={"business-partner-1"} width={80} height={39} />
                </div>
                <div className="flex flex-row items-center justify-center shadow-lg bg-white shadow-slate-300 px-14 py-6">
                    <Image src="/businessPartners/9.svg" alt={"business-partner-1"} width={90} height={41} />
                </div>
            </div>
        </div>
    )
}