import SingleNewsPage from '@/pages/SingleNewsPage'
import React from 'react'

export async function getOneNews(id) {
  const res = await fetch("https://news-backend-qf0h.onrender.com/api/news/"+id)
  return res.json();
}

const page = async ({ params }) => {

  const id = params.id
  const singleNews = await getOneNews(id)

  return (
    <div>
      <SingleNewsPage singleNews={singleNews[0]} />
    </div>
  )
}

export default page