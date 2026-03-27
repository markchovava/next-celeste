import FooterDefault from "./_components/footers/FooterDefault";
import HeaderDefault from "./_components/headers/HeaderDefault";
import IntroSection from "./_components/sections/IntroSection";
import FadeSlideIn from "./_components/effects/FadeSlideIn";
import Spacer from "@/_components/spacers/Spacer";
import { AboutData } from "./_data/sample/AboutData";
import DoubleSection from "./_components/sections/DoubleSection";
import { partnerAllAction } from "./_data/actions/PartnerActions";
import HomePage from "./_components/HomePage";
import { clientAllAction } from "./_data/actions/ClientActions";
import SliderSecondary from "./_components/sliders/SliderSecondary";
import SliderDefault from "./_components/sliders/SliderDefault";
import { PageMetaInterface } from "./_data/entity/PageMetaEntity";
import { cache } from "react";
import { pageMetaBySlugAction } from "./_data/actions/PageMetaActions";
import { Metadata } from "next";
import { appInfoViewAction, getAppInfo } from "./_data/actions/AppInfoActions";
import Header from "./_components/headers/Header";
import Slider from "./_components/sliders/Slider";
import { AppInfoData } from "./_data/sample/AppInfoData";
import { ButtonPrimary } from "./_components/buttons/ButtonPrimary";
import HomeMainSection from "./_components/HomeMainSection";
import ContactSection from "./_components/sections/ContactSection";



interface PropInterface{
    data: PageMetaInterface
    status: number | string
}



const getPageMeta = cache(async (slug: string): Promise<PropInterface | null> => {
  const data = await pageMetaBySlugAction(slug);
  return data ?? null;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageMeta = await getPageMeta('home');

  if (!pageMeta?.data) {
    return {
      title: 'Kegan Management Consulting - Home',
      description: '',
    };
  }

  const { title, description, keywords } = pageMeta.data;
  let parsedKeywords: string[] = [];
  try {
    parsedKeywords = JSON.parse(keywords);
  } catch {
    parsedKeywords = [];
  }

  return {
    title,
    description,
    keywords: parsedKeywords,
    openGraph: {
      title,
      description,
    },
  };
}


export default async function Home() {
  const [
    appInfoData
  ] = await Promise.all([
      getAppInfo()
  ])

  return (
   <div className='bg-gray-50'>
    <HomeMainSection
      appInfoData={appInfoData} 
    />

      <div className="bg-gray-100">
          <FadeSlideIn slideDirection="up" duration={1500}>
              <Spacer />
              <ContactSection withMap={true} />
          </FadeSlideIn>
      </div>
   </div>
  );
}
