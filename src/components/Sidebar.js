import { data } from '@/pages/Main'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-5 p-5'>
      <head>
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3301497529143433"
            crossorigin="anonymous"></script>
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-3301497529143433"
            data-ad-slot="1078032589"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script> */}
      </head>
      {/* {data.map(news => (
        <div>
          <p className='text-[14px]'>{news.desc.slice(0,150)}</p>
          <div className='flex items-center gap-2'>
            <p className='text-[#4D2115] font-semibold text-sm'>{news.author.toUpperCase()}</p>
            <p className='text-[14px]'>-</p>
            <p className='text-[14px]'>2m ago</p>
          </div>
        </div>
      ))} */}
    </div>
  )
}

export default Sidebar