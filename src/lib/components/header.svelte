<script lang="ts">
  import AsciiLogo from "$lib/components/ascii-logo.svelte"
</script>

<header>
  <AsciiLogo />
</header>

<style>
  header {
    max-width: 32rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 2rem 1rem;
    @media (min-width: 32rem) {
      padding: 2rem 2rem;
    }
  }
</style>
