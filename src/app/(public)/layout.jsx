import AnalyticsProvider from '@/components/AnalyticsProvider'
import ChatButton from '@/components/chat/ChatButton'
import Footer from '@/components/modules/Footer/Footer'
import Header from '@/components/modules/Header/Header'
import WebVitals from '@/components/WebVitals'
import Script from 'next/script'
import RegisteredRegulated from '../../components/shared/RegisteredRegulated'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
export default function publicLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
      </Script>
      <RegisteredRegulated />
      <Footer />
      <ChatButton />
      <AnalyticsProvider />
      <WebVitals />
    </>
  )
}
