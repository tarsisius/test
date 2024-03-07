import type { PageLoad } from "./$types"
import { getAllMeta } from "$lib/extract"

export const prerender = true
export const load: PageLoad = () => {
  return {
    meta: getAllMeta(),
  }
}
