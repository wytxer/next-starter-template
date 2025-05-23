import BigComponent from '@/components/BigComponent'

export const dynamic = 'force-static' // 确保静态导出

export async function generateMetadata() {
  return { title: 'Terms of Use' }
}

export default function HomePage() {
  return (
    <main>
      <h1>Hello Next Static Export 3</h1>
      <BigComponent />
    </main>
  )
}
