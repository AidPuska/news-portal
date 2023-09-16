import SingleNewsPage from '@/pages/SingleNewsPage'
import React from 'react'

export async function getOneNews(id) {
  const res = await fetch("http://localhost:4000/news/"+id)

  return res.json();
}

const page = async ({ params }) => {

  const id = params.id
  const singleNews = await getOneNews(id)


  return (
    <div>
      {id}
      <SingleNewsPage singleNews={singleNews} />
    </div>
  )
}

export default page