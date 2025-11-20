import AISearchBox from '@/components/ai/AISearchBox'
import React, { Suspense } from 'react'

export default function page() {
  return (
   <div className='pt-36'>
    <Suspense>
       <AISearchBox />
    </Suspense>
   </div>
  )
}
