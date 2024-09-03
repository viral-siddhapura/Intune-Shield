import Image from "next/image";
import { Button } from "../ui/button";

export const CompanyStory = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-6">
            <div className="col-span-2 row-span-6">
                <Image src="/Icons/company-story.svg" alt="company-story" width={663} height={583} />
            </div>
            <div className="col-span-2 col-start-3 m-10">
                <p className="text-normal text-violet-700 font-semibold">OVER 150K+ CLIENT</p>
                <p className="text-4xl w-[500px] text-black font-bold mt-5">The Story Behind Our Company</p>
                <p className="text-normal text-gray-400 mt-10 w-[500px]">Excepteur sint occaecat cupidatat officia non proident sunt in culpa qui deserunt.!</p>
                <div className="flex flex-row items-start mt-5">
                    <Image src="/Icons/right_icon.svg" alt="right_icon" width={24} height={24}/>
                    <p className="text-black ml-5 font-semibold text-normal">Various analysis options.</p>
                </div>
                <div className="flex flex-row items-start mt-5">
                    <Image src="/Icons/right_icon.svg" alt="right_icon" width={24} height={24}/>
                    <p className="text-black ml-5 font-semibold text-normal">Page Load (time, size, number of requests).</p>
                </div>
                <div className="flex flex-row items-start mt-5">
                    <Image src="/Icons/right_icon.svg" alt="right_icon" width={24} height={24}/>
                    <p className="text-black ml-5 font-semibold text-normal">Big data analysis.</p>
                </div>
                <div>
                    <Button variant={"joinUs"} className="mt-10">Join Us</Button>
                </div>
            </div>
        </div>
    )
}