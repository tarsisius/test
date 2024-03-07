import { getAllMeta } from "$lib/extract"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
  const meta = getAllMeta()

  return {
    meta: [
      {
        title: 'Hello worldd',
        slug: 'hello-world',
        published: { date: '2024-03-03', time: '20:12' },
        updated: { date: '2024-03-03', time: '20:12' }   
      }
    ]
    ,
  }
}
