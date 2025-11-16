import Footer from '@/components/modules/Footer/Footer'
import Header from '@/components/modules/Header/Header'
import React from 'react'

export default function publicLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
