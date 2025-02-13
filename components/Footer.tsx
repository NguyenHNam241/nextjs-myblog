import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className=" text-white">
      <div className="mt-16 flex flex-col items-center ">
        <div className="mb-3 flex space-x-4">
          <div className='flex items-center space-x-2 hover:text-gray-500'> 
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <span className='text-black uppercase'>Mail</span>
          </div>
          <div className='flex items-center space-x-2 hover:text-gray-500'>
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <span className="text-black uppercase">Github</span>
          </div>
          <div className='flex items-center space-x-2 hover:text-gray-500'>
          <SocialIcon  kind="facebook" href={siteMetadata.facebook} size={6}  />
            <span className="text-black uppercase">Facebook</span>
          </div>
          <div className='flex items-center space-x-2 hover:text-gray-500'>
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
            <span className="text-black uppercase">youtube</span>
          </div>
          <div className='flex items-center space-x-2 hover:text-gray-500'>
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
            <span className="text-black uppercase">twitter</span>
          </div>
          <div className='flex items-center space-x-2 hover:text-gray-500'>
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
            <span className="text-black uppercase">instagram</span>
          </div>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` - `}</div>
          <div>{` All Right Reserved. Designed and Developed by`}</div>
          <Link className='hover:underline text-black' href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-black dark:text-gray-400">
          <Link href="https://github.com/NguyenHNam241/nextjs-myblog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
