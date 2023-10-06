import ErrorBoundary from '@/components/ErrorBoundary'
import Main from '@/pages/Main'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="w-full flex h-[100vh] justify-center bg-white">
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3301497529143433"
      />
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </main>
  )
}
