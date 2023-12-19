import { getAllPosts, getPostBlocks } from '@/lib/notion'

import Container from '@/components/Container'
import NotePost from '@/components/NotePost'
import NotesHero from '@/components/Hero/Notes'
import { getBlocksMaps } from '@/lib/getBlocksMaps'

export async function getStaticProps() {
  const { pagesJson, siteConfigObj } = await getBlocksMaps()

  let blocksJson = pagesJson.slice(); // Create a copy of pagesJson

  // Filtering out specific blocks from blocksJson
  blocksJson = blocksJson.filter(
    (block) => block.title !== 'Title' && block.slug !== 'index'
  )

  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'notes')

  let blockMap = null; // Initialize blockMap to null
  try {
    if (hero && hero.id) {
      blockMap = await getPostBlocks(hero.id)
    }
  } catch (err) {
    console.error(err)
    // Handle errors, log, or handle differently as needed
  }

  return {
    props: {
      blocksJson,
      siteConfigObj,
      blockMap,
    },
    revalidate: 1,
  }
}

const Notes = ({ blocksJson, siteConfigObj, blockMap }) => {
  return (
    <Container
      title={siteConfigObj['Site Name']}
      description={siteConfigObj['Site Description']}
      siteConfigObj={siteConfigObj}
    >
      <NotesHero blockMap={blockMap} />
      {blocksJson.map((block) => (
        <NotePost key={block.slug} note={block} />
      ))}
    </Container>
  )
}

export default Notes