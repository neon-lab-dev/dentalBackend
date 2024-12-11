import Statement from "@/components/AboutUs/CEOStatement/Statement"
import FAQ from "@/components/AboutUs/FAQs/FAQ"
import AboutUsHero from "@/components/AboutUs/Hero/AboutUsHero"
import Journey from "@/components/AboutUs/SectionTwo/Journey"
import Teams from "@/components/AboutUs/Teams/Teams"


const AboutUs = () => {
  return (
    <div className="flex flex-col gap-[50px] py-5 px-4 sm:px-12">
      <AboutUsHero />
      <Journey />
      <Statement />
      <Teams />
      <FAQ />
    </div>
  )
}
 
export default AboutUs 
