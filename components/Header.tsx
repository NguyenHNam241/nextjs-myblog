import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import SocialIcon from '@/components/social-icons'

const Header = () => {
  let headerClass = 'flex flex-col items-center bg-white dark:bg-gray-950 justify-between py-10 '
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center ">
          <div className="mr-3">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex bg-[rgb(255,255,255)] items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6 w-full pt-6 pb-6 justify-between ">
      <div className="no-scrollbar flex items-center gap-x-3 overflow-x-auto sm:flex w-full min-w-0 max-w-full flex-nowrap">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <div className='flex items-center justify-between gap-x-3'>
        <MobileNav />
        <SocialIcon kind="github" href={siteMetadata.github} size={6} />
        <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
        <SearchButton />
        <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}

export default Header
