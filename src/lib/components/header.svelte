<script lang="ts">
  import { base } from "$app/paths"
</script>

<header>
  <pre class="title">
 __    __                   
/\ \__/\ \                  
\ \ ,_\ \ \___   _____      
 \ \ \/\ \  _ `\/\ '__`\    
  \ \ \_\ \ \ \ \ \ \L\ \__ 
   \ \__\\ \_\ \_\ \ ,__/\_\
    \/__/ \/_/\/_/\ \ \/\/_/
                     \ \_\  
                      \/_/   </pre>
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

  header .title {
    /* transform: translateX(-2.5rem); */
    margin: 0;
    color: inherit;
    text-decoration: none;
    font-size: 0.6rem;
    font-weight: 900;
    padding: 0;
  }
</style>
