<script>
import {contactModal} from "$lib/stores.ts"
</script>

<div class="mt-8 flex justify-center">
  <div class="inline-flex rounded-md shadow">
    <button
      
			on:click={contactModal.show}
      class="inline-flex items-center cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
      >Fissa una seduta gratuita</button
    >
  </div>
</div>
