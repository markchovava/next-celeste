"use client"
import ButtonMenu from '../buttons/ButtonMenu'
import Logo from '../logos/Logo'
import NavMain from '../navs/NavMain'
import NavMainResponsive from '../navs/NavMainResponsive'
import SocialNav from '../navs/SocialNav'
import HeaderTop from './HeaderTop'


export default function Header() {
  return (
    <>
    <div className='border-b border-slate-200'>
      <HeaderTop />
            
      <header className='bg-white hidden lg:block'>
        <section className='container__primary flex items-center justify-between gap-12 py-4'>
            <div className='flex items-center justify-start gap-8'>
                <Logo />
                <NavMain />
            </div>
            <div>
              <SocialNav />
            </div>
        </section>
      </header>

      <HeaderResponsive />
     </div>
    </>
  )
}


function HeaderResponsive(){
  
  return(
    <>
    <header className='bg-white lg:hidden block'>
        <section className='container__primary flex items-center justify-between gap-12 py-2'>
          <Logo />
          <ButtonMenu />
        </section>

        <NavMainResponsive />
    </header>
    </>
  )

}
