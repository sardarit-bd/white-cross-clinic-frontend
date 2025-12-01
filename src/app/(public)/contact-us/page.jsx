import ContactSection from '@/components/modules/appointment/ContactSection'
import React from 'react'
import GoogleMap from './GoogleMap'

export default function page() {
    return (
        <section className="py-20 bg-[var(--bgLight)]">
            <div className="container mx-auto px-6">
                <ContactSection />
                <GoogleMap />
            </div>
        </section>
    )
}
