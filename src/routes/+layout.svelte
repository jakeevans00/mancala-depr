<script>
  import Header from "./Header.svelte";
  import "../app.css";
</script>

<div>
  <Header />
  <main>
    <slot/>
  </main>
  <footer>
    copyright @moms-stick
  </footer>
</div>
