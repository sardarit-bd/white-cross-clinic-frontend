import NormalSearchPage from '@/components/ai/NormalSearch'
import React, { Suspense } from 'react'

export default function page() {
  return (
   <div className='mt-36 bg-[var(--bgLight)]'>
    <Suspense>
        <NormalSearchPage />
    </Suspense>
   </div>
  )
}
