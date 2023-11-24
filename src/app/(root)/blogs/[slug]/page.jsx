import React from 'react'
import {BiLogoFacebookCircle } from 'react-icons/bi'
import {BiLogoInstagram } from 'react-icons/bi'
import {BiLogoLinkedin } from 'react-icons/bi'
import {BiLogoTwitter } from 'react-icons/bi'
const Page = () => {
  return (
    <>
     <section className='flex flex-col gap-4 mt-4 w-full'>
      <h1 className='text-2xl ml-2'>Which technologies are going to kill nodejs in 2030?</h1>
      <div className="px-4 py-2 mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <img
              className="object-cover h-10 rounded-full"
              src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
              alt="Avatar"
            />
            <div className="flex flex-col mx-2">
              <a href="" className="font-semibold  text-gray-700 hover:underline">
                Shahwaix kareem
              </a>
              <span className="mx-1 text-xs text-gray-600">28 Sep 2023</span>
            </div>
          </div>
          <p className="mt-1 text-xs text-gray-600">9 minutes read</p>
        </div>
      </div>
      <div className="px-px md:px-3">
        {/* user following for mobile only */}
        <ul
          className="flex  md:gap-12 space-x-8 border-t 
          text-center p-2 text-gray-600 leading-snug text-sm"
        >
          <li>
            <span className="font-semibold text-gray-800 block">136</span>
            posts
          </li>
          <li>
            <span className="font-semibold text-gray-800 block">40.5k</span>
            followers
          </li>
          <li>
            <span className="font-semibold text-gray-800 block">302</span>
            following
          </li>
        </ul>
        
      </div>      
     
    
     <article className='flex  mt-4 gap-8'>
      <div className='pt-6'>
     <span className='flex flex-col border bg-white gap-4 mt-16 text-3xl rounded-full'>
       <BiLogoFacebookCircle className='text-blue-500'/>
       <BiLogoInstagram className='text-pink-500'/>
       <BiLogoLinkedin className='text-blue-500'/>
       <BiLogoTwitter className='text-blue-500'/>
       </span>
       </div>
         <main>
          <p className='text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aut ex, itaque esse eligendi nostrum non similique eius. Saepe maxime aliquid ex vel eveniet quasi mollitia harum inventore earum, facilis reprehenderit ullam sunt minus! Aliquid provident debitis, rem earum dolorem dolorum dolores modi a nobis id incidunt minima possimus est aliquam nesciunt doloribus non repudiandae at culpa dolore commodi libero distinctio. Voluptate iure quae deserunt laborum alias veritatis nihil sed qui labore blanditiis libero iste error magnam laudantium suscipit ab accusantium beatae fuga laboriosam, voluptatem a. Eveniet non eaque eos minus iure placeat atque odio reprehenderit nihil, officia voluptatem aut quos id neque doloremque, nostrum minima asperiores ut illum quibusdam. Ratione distinctio hic debitis blanditiis incidunt assumenda enim cupiditate in magnam, molestias totam veritatis, nisi, laboriosam amet voluptate sint pariatur. In deleniti explicabo architecto a officiis blanditiis, quae commodi amet. Iusto vel possimus delectus aperiam repellat, omnis voluptatum ullam repudiandae magni architecto enim numquam id! Eligendi corrupti fugiat, sunt non cumque, quasi ullam, odit odio consequuntur pariatur nemo iste officia dolorem. Totam, nihil. Minima debitis similique labore hic nisi in eligendi quis culpa quibusdam quaerat sint quisquam unde reiciendis sunt voluptates numquam quam, a natus modi reprehenderit provident. Temporibus commodi accusantium dolorum, perspiciatis inventore nisi perferendis deserunt quia modi voluptas amet accusamus incidunt, minima assumenda nesciunt quaerat pariatur, vero quae suscipit quod. Atque esse corrupti laboriosam facere aut sit distinctio deleniti, temporibus quibusdam quos necessitatibus repudiandae nulla quasi qui voluptas eos cupiditate tempore impedit quia quod, tempora veniam voluptatem maiores! Quisquam illum tenetur aspernatur quibusdam fugit. Velit ipsum autem soluta nisi, expedita, quidem animi, laboriosam libero adipisci magnam iure cupiditate? Placeat nemo fugiat ipsum debitis repellat eveniet recusandae et nesciunt expedita dignissimos earum tenetur cum in id minus, explicabo assumenda quibusdam exercitationem obcaecati fuga doloremque harum laboriosam? Nemo dolorem voluptates optio commodi modi vitae alias cumque perspiciatis quaerat? Ullam quisquam porro nihil officiis cupiditate vel laborum eligendi sit, eos sunt labore. Quo error saepe, nemo vitae odit est labore repellat animi officia nostrum tempora maxime ad maiores ullam numquam, eos itaque? Nisi provident minus veritatis inventore voluptatem nemo vel? Ab, itaque sunt. Commodi doloribus laboriosam perspiciatis quaerat reiciendis, id explicabo vel laudantium earum modi repellat sapiente neque ipsa sequi molestiae, provident ducimus vero quasi voluptatum non omnis. Nemo, hic quae. Iste, nesciunt libero aliquid odio asperiores officiis, vel harum quis quam, nulla ipsa ab sit quasi incidunt omnis similique. Laborum placeat in quidem accusantium est amet quasi quo pariatur delectus ad laudantium aliquam odio corrupti iste fugiat tempora labore eaque suscipit facere, consequatur eum! Esse, ut! Quaerat repellat unde delectus commodi tenetur aut exercitationem iste dolorum voluptatibus, architecto enim aliquam obcaecati nesciunt minima vero quia rerum et nostrum autem at harum iure non! Aperiam, non voluptatem.</p>
         </main>
       <div>
     
       </div>
     </article>
     </section>
    </>
  )
}

export default Page
