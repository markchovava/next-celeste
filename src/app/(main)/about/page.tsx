import FooterDefault from '../_components/footers/FooterDefault'
import { cache } from 'react'
import { Metadata } from 'next'
import { PageMetaInterface } from '../_data/entity/PageMetaEntity'
import { pageMetaBySlugAction } from '../_data/actions/PageMetaActions'
import { getAppInfo } from '../_data/actions/AppInfoActions'
import Header from '../_components/headers/Header'
import AboutMainSection from './_components/AboutMainSection'
import Title from '../_components/titles/Title'
import { NoImage } from '@/_data/sample/NoImage'
import FadeSlideIn from '../_components/effects/FadeSlideIn'
import Spacer from '@/_components/spacers/Spacer'
import ContactSection from '../_components/sections/ContactSection'
import Banner from '../_components/banner/Banner'
import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import { AppInfoData } from '../_data/sample/AppInfoData'



interface PropInterface{
    data: PageMetaInterface
    status: number | string
}

const getPageMeta = cache(async (slug: string): Promise<PropInterface | null> => {
  const data = await pageMetaBySlugAction(slug);
  return data ?? null;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageMeta = await getPageMeta('about-us');

  if (!pageMeta?.data) {
    return {
      title: 'Celeste Energy - About Us',
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


const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'About Us', href: '/about'},
]


export default async function page() {
  const [appInfoData] = await Promise.all([
    getAppInfo()
  ]);

  return (
    <div className='bg-white'>
      <Banner 
        image={AppInfoData.about.image}
        title={AppInfoData.about.title}
        details={AppInfoData.about.subtitle} />
      <BreadCrumb data={CrumbsData} />
      

      <AboutMainSection appInfoData={appInfoData} />
    
    
      <div className="bg-gray-100">
          <FadeSlideIn slideDirection="up" duration={1500}>
              <Spacer />
              <ContactSection />
          </FadeSlideIn>
      </div>

    </div>
  )
}
