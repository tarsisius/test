<script lang="ts">
  import type { PageData } from "./$types"
  import PostCard from "$lib/components/post-card.svelte"

  export let data: PageData
</script>

<article>
  cek duls
  {#each data.meta as meta}
    <p>{meta.title}</p>
    <!-- <PostCard {meta} /> -->
  {/each}
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
