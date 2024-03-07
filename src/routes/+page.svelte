<script lang="ts">
  // import type { PageServerData } from "./$types"

  // export let data: PageServerData

  import { getAllMeta } from "$lib/extract"
  const metas = getAllMeta()
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

{#each metas as meta}
  <p>{meta.title}</p>
{/each}
