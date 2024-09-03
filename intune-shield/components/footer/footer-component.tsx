import Image from "next/image";

export const FooterSection = () => {
    return (
        <footer>
            <div className="grid grid-cols-4 grid-rows-4 gap-4">
                <div className="row-span-4">
                    <div className="flex flex-row items-start">
                        <Image src="/logo.svg" alt="logo" width={34} height={36} />
                        <p className="text-black text-2xl font-bold mx-2">Softec</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="w-[300px] mt-5">Faster payments, Expense reports done right. Budgeting made easy.</p>
                    </div>
                    <div className="flex flex-row items-center mt-5">
                        <Image src="/Icons/call-icon.svg" alt="facebook" width={22} height={22} />
                        <p className="text-gray-600 font-semibold text-lg ml-4">+806 (000) 88 99</p>
                    </div>
                    <div className="flex flex-row items-center mt-5">
                        <Image src="/Icons/email-icon.svg" alt="facebook" width={22} height={22} />
                        <p className="text-gray-600 font-semibold text-lg ml-4">contact@info.com</p>
                    </div>
                </div>
                <div className="row-span-4">
                    <div className="flex flex-row items-start">
                        <p className="text-black text-2xl font-bold">Navigation</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-black text-lg mt-6">Demo Page</p>
                        <p className="text-black text-lg mt-4">About</p>
                        <p className="text-violet-700 font-medium text-lg mt-4 underline">Pricing Plan</p>
                        <p className="text-black text-lg mt-4">Integrations</p>
                        <p className="text-black text-lg mt-4">Blog</p>
                        <p className="text-black text-lg mt-4">Contact</p>
                    </div>
                </div>
                <div className="row-span-4">
                    <div className="flex flex-row items-start">
                        <p className="text-black text-2xl font-bold">Other Pages</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-black text-lg mt-6">Features</p>
                        <p className="text-black text-lg mt-4">Team</p>
                        <p className="text-black text-lg mt-4">Careers</p>
                        <p className="text-black text-lg mt-4">Login</p>
                        <p className="text-black text-lg mt-4">Register</p>
                        <p className="text-black text-lg mt-4">404 Not found</p>
                    </div></div>
                <div className="row-span-4">
                    <div className="flex flex-row items-start">
                        <p className="text-black text-2xl font-bold">Our Newsletter</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}