import NormalSearchPage from '@/components/ai/NormalSearch'
import React, { Suspense } from 'react'

export default function page() {
  return (
   <div className='mt-36'>
    <Suspense>
        <NormalSearchPage />
    </Suspense>
   </div>
  )
}
