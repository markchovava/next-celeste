
import FadeSlideIn from "./_components/effects/FadeSlideIn";
import Spacer from "@/_components/spacers/Spacer";
import { PageMetaInterface } from "./_data/entity/PageMetaEntity";
import { cache } from "react";
import { pageMetaBySlugAction } from "./_data/actions/PageMetaActions";
import { Metadata } from "next";
import { getAppInfo } from "./_data/actions/AppInfoActions";
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
