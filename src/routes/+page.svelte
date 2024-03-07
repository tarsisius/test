<script lang="ts">
  import { getAllMeta } from "$lib/extract"
  import PostCard from "$lib/components/post-card.svelte"
  const metas = getAllMeta()
</script>

<article>
  {#each metas as meta}
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
