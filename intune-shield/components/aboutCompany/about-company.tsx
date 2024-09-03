import Image from "next/image"

export const AboutCompany = () => {
    return (
        <div>
            <div className="grid grid-cols-5 grid-rows-4 gap-x-10">
                <div className="col-span-2 row-span-3">
                    <div className="flex flex-col items-start">
                        <p className="text-normal text-violet-700 font-semibold">About the company</p>
                        <p className="text-5xl font-bold w-[400px] text-black line-clamp-2 mt-10">Softuch is Made For the Creator.</p>
                    </div>
                </div>
                <div className="col-span-3 row-span-2 col-start-3">
                    <p className="w-[600px] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu tellus mattis quis. Eu, tempus donec nam mauris egestas. Id aliquet ultricies ligula tellus arcu dolor. Massa arcu pulvinar in mattis.</p>
                    <p className="w-[600px] text-lg mt-10">Feugiat purus congue risus, blandit a sed. In aenean quam aenean purus dictum pellentesque consequat.!</p>
                </div>
                <div className="col-start-1 row-start-4 mt-10">
                    <div className="flex flex-row items-center">
                        <Image src="/Icons/video_icon.svg" alt="video_icon" width={70} height={70} />
                        <p className="ml-10 text-black font-semibold text-normal">Watch Demo</p>
                    </div>
                </div>
                <div className="col-span-3 col-start-3 row-start-3">
                    <p className="w-[600px] text-black font-semibold text-lg mt-10">Our clean and simple APIs and transparent SaaS model will give you complete peace of mind.</p>
                </div>
                <div className="row-start-4"></div>
                <div className="row-start-4 mt-10">
                    <div className="flex flex-col items-start">
                        <p className="text-xs">USED BY</p>
                        <p className="font-bold text-3xl text-black">11000+</p>
                        <p className="text-xs">Creators</p>
                    </div>
                </div>
                <div className="row-start-4 mt-10">
                    <div className="flex flex-col items-start">
                        <p className="text-xs">VALUE</p>
                        <p className="font-bold text-3xl text-black">46+</p>
                        <p className="text-xs">Revenue per Year</p>
                    </div>
                </div>
                <div className="row-start-4 mt-10">
                    <div className="flex flex-col items-start">
                        <p className="text-xs">IN</p>
                        <p className="font-bold text-3xl text-black">150+</p>
                        <p className="text-xs">Countries using</p>
                    </div>
                </div>
            </div>
        </div>
    )
}