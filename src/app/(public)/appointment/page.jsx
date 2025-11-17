import AppointmentForm from '@/components/modules/appointment/AppointmentForm'
import AppointmentHero from '@/components/modules/appointment/AppointmentHero'
import ContactSection from '@/components/modules/appointment/ContactSection'
import React, { Suspense } from 'react'

export default function Appointment() {
  return (
    <>
        <AppointmentHero/>
        <Suspense fallback={<div className="text-center py-20">Loading appointment form...</div>}>
          <AppointmentForm />
        </Suspense>
        <ContactSection />
    </>
  )
}
