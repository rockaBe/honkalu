import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Honk-A-Lu</h1>
    <div className="link-module">
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
    </div>
  </div>
)

export default Index
