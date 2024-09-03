import { AboutCompany } from "@/components/aboutCompany/about-company";
import { CompanyStory } from "@/components/aboutCompany/story-company";
import { BusinessPartnersGrid } from "@/components/businessPartner/business-partner-grid";
import { FooterSection } from "@/components/footer/footer-component";
import { AboutSoftecTitle } from "@/components/navigation/about-softec-title";
import { HeaderComponent } from "@/components/navigation/header-component";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-96 bg-violet-800 flex flex-col">
        <HeaderComponent />
        <AboutSoftecTitle />
      </div>
      <div className="w-full flex mt-72 flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <BusinessPartnersGrid />
        </div>
      </div>
      <div className="flex justify-center mt-40 mb-10">
        <AboutCompany />
      </div>
      <div className="flex justify-center mt-40 mb-10">
        <CompanyStory />
      </div>
      <div className="flex justify-center mt-40 mb-10">
        <FooterSection/>
      </div>
    </div>
  );
}
