<script>
  import { contactModal } from "$lib/stores.ts";
</script>

<div class="relative">
  <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
      <div class="absolute inset-0">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="People working on laptops"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"
        />
      </div>
      <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
        <h1
          id="hero"
          class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span class="block text-white">Prendi il controllo</span>
          <span class="block text-indigo-200">sul tuo fisico</span>
        </h1>
        <p
          class="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl"
        >
          Un allenamento dedicato alla prestazione per una crescita e un
          miglioramento fisico sano e naturale. L'allenamento come sfida contro
          se stessi, un approccio che aumenta la costanza dell'allenamento e
          garantisce risultati sia strutturali che estetici.
        </p>
        <div
          class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center"
        >
          <div
            class="space-y-4 sm:mx-auto sm:inline-grid sm:gap-5 sm:space-y-0"
          >
            <a
              
              class="flex items-center cursor-pointer justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
							on:click={contactModal.show}
							>Fissa una seduta gratuita</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
