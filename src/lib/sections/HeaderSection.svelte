<script>
  import Logo from "$lib/components/Logo.svelte";
  let flyoutOpen = false;
</script>

<header>
  <div class="relative bg-white">
    <div
      class="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
    >
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <span class="sr-only">ES Powerlifting</span>
          <div class="flex justify-center items-center">
            <Logo />
          </div>
        </a>
      </div>
      <div class="-my-2 -mr-2 md:hidden" />
      <nav class="hidden space-x-10 md:flex">
        <a href="#why-me" class="text-base text-gray-500 hover:text-gray-900"
          >Perché allenarsi con me</a
        >
        <a href="#pricing" class="text-base text-gray-500 hover:text-gray-900"
          >Prezzi</a
        >
        <a href="#who-i-am" class="text-base text-gray-500 hover:text-gray-900"
          >Chi sono</a
        >
      </nav>
    </div>
  </div>
</header>
