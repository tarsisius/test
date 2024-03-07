<script lang="ts">
  import type { PageData } from "./$types"
  import PostCard from "$lib/components/post-card.svelte"

  export let data: PageData
</script>

<article>
  {#each data.meta as meta}
    <PostCard {meta} />
  {/each}
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
