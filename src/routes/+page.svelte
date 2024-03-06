<script lang="ts">
  import type { PageServerData } from "./$types"

  export let data: PageServerData
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

{#each data.meta as meta}
    <p>{meta.title}</p>
  {/each}
