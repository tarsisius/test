<script lang="ts">
  import { base } from "$app/paths"
</script>

<header>
  <a class="title" href="{base}/">
    <img src="{base}/logo.jpg" alt="A starry night sky." />
  </a>
</header>

<style>
  header {
    max-width: 32rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 4rem 1rem;
    @media (min-width: 32rem) {
      padding: 4rem 2rem;
    }
  }

  header .title {
    margin: 0;
  }

  .title img {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
  }
</style>
