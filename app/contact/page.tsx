import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({ title: 'Contact' })
export default function Page() { 
    return (
        <section className=" max-w-3xl mx-auto p-6 ">
             <p className="  h-auto w-full ">
                <img src="/static/images/contact-banner.png" alt="banner"  className='rounded-lg'/>
             </p>
            <p>Have a question, a comment? Want to collaborate in some way? Just have something nice to say? I’d love to hear from you! Shoot me a message below and I’ll be sure to get back to you as soon as I can. Thanks!</p>
            <h2 className="">Contact Me</h2>
             {/* Information */}
            <div className="">
                <p className="">Address : My Dinh, Ha Noi, Viet Nam</p>
                <p>Phone : 0896684352</p>
                <p className="">Email :{siteMetadata.email}</p>
            </div>
            {/* Form contact */}
            <form className="mt-6 flex flex-col space-y-4">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea rows={5} placeholder="Your message"></textarea>
                <button className="hover:bg-primary-200 px-8 w-full bg-blue-600 text-white py-3 rounded-md transition duration-300" type="submit">Submit</button>
            </form>
            <div>
            </div>    
        </section>
        
    )
}
