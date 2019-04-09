
import Layout from '../components/MyLayout'
import Link from 'next/link'

// const Page = () => <p>Hello Next.js</p>

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs"  title="Hello Next.js"></PostLink>
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome"></PostLink>
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"></PostLink>
      </ul>
    </Layout>
  )
}
