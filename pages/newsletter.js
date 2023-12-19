import { getAllPosts, getPostBlocks } from '@/lib/notion'

import BLOG from '@/blog.config'
import BlogPost from '@/components/BlogPost'
import Container from '@/components/Container'
import NewsletterHero from '@/components/Hero/Newsletter'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyNewsletter: true })

  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'newsletter')

  let blockMap = null; // Initialize blockMap to null

  try {
    if (hero && hero.id) {
      blockMap = await getPostBlocks(hero.id)
    }
  } catch (err) {
    console.error(err)
    // Handle errors, you might want to log or handle the error differently
  }

  return {
    props: {
      posts,
      blockMap,
    },
    revalidate: 1,
  }
}

const Newsletter = ({ posts, blockMap }) => {
  return (
    <Container title={BLOG.newsletter} description={BLOG.description}>
      <NewsletterHero blockMap={blockMap} />
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </Container>
  )
}

export default Newsletter