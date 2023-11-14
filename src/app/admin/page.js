import React from 'react'
import { redirect } from 'next/navigation'

const page = () => {

  const isAuth = false

  if(!isAuth) redirect("/admin/login")

  return (
    <div>Admin page</div>
  )
}

export default page