import AppointmentForm from '@/components/modules/appointment/AppointmentForm'
import AppointmentHero from '@/components/modules/appointment/AppointmentHero'
import ContactSection from '@/components/modules/appointment/ContactSection'
import React from 'react'

export default function Appointment() {
  return (
    <>
        <AppointmentHero/>
        <AppointmentForm />
        <ContactSection />
    </>
  )
}
