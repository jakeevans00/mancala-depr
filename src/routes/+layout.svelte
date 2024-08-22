<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "../app.css";
</script>

<div class="h-screen px-4 py-2 flex flex-col justify-between">
  <Header />
  <main>
    <slot/>
  </main>
  <Footer/>
</div>
