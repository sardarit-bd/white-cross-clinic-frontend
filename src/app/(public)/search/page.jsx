import AISearchBox from '@/components/ai/AISearchBox'
import React, { Suspense } from 'react'

export default function page() {
  return (
   <div className='pt-36 bg-[var(--bgLight)]'>
    <Suspense>
       <AISearchBox />
    </Suspense>
   </div>
  )
}
