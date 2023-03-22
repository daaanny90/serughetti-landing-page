<script>
	import {contactModal} from "$lib/stores.ts"
</script>
<div class="bg-white">
  <div
    class="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8"
  >
    <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Vuoi scoprire se il mio allenamento fa per te?</span>
      <span
        class="-mb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text pb-1 text-transparent"
        >Lascia un tuo contatto e fissiamo insieme un'allenamento di prova</span
      >
    </h2>
    <div class="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
      <button
				on:click={contactModal.show}
        class="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
        >Seduta gratuita</button
      >
    </div>
  </div>
</div>
