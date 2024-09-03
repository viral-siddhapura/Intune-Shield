import Image from "next/image";
import { NavBarMenu } from "./navbar-menu";
import { Button } from "../ui/button";

export const HeaderComponent = () => {
    return (
        <div className="flex w-full h-20 bg-violet-800">
            <div className="w-1/2 flex items-center justify-end">
                <Image src="/logo.svg" alt="logo" width={34} height={36} />
                <p className="text-white text-2xl font-bold mx-2">Softec</p>
                <NavBarMenu />
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <Image src="/Icons/user.svg" alt="logo" width={16} height={14} />
                <Button variant={"link"}>Login</Button>
                <p className="bg-white rounded-full text-black text-normal font-medium mx-2 px-4 py-2">Get in Touch</p>
            </div>
        </div>
    )
}