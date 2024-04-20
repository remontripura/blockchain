import BlockChainTrustSection from "./BlockChainTrustSection";
import HeroSection from "./HeroSection";
import FreedomSection from "./FreedomSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import FacilitiesSection from "./FacilitiesSection";
import BuildBizSection from "./BuildBizSection";
import LatestBlogSection from "./LatestBlogSection";
import ContactSection from "./ContactSection";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div className="">
    <Helmet>
        <title>Biz - Token - Home</title>
    </Helmet>
      <HeroSection />
      <BlockChainTrustSection />
      <FreedomSection />
      {/* <InvolvedSection /> */}
      <WhyChooseUsSection />
      <FacilitiesSection />
      <BuildBizSection />
      <LatestBlogSection />
      <ContactSection />
    </div>
  );
};

export default Home;
