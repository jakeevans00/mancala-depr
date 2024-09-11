<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "../app.css";
</script>

<div class="bg-white h-screen px-4 py-2 flex flex-col justify-between">
  <Header />
  <div class="flex justify-center px-2 md:px-4">
    <main>
      <slot />
    </main>
  </div>
  <Footer />
</div>
