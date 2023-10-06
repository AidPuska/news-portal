import ErrorBoundary from '@/components/ErrorBoundary'
import Main from '@/pages/Main'

export default function Home() {
  return (
    <main className="w-full flex h-[100vh] justify-center bg-white">
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </main>
  )
}
