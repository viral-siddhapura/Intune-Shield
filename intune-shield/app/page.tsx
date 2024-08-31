import { AboutSoftecTitle } from "@/components/navigation/about-softec-title";
import { HeaderBottom } from "@/components/navigation/header-bottom";
import { HeaderComponent } from "@/components/navigation/header-component";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex">
      <div className="w-full h-96">
        <HeaderComponent />
        <AboutSoftecTitle />
        {/* <HeaderBottom /> */}
      </div>
    </div>
  );
}
