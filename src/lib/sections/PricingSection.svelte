<script>
  import {contactModal} from "$lib/stores.ts"
</script>

<div class="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8">
  <h2 id="pricing" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">Piani di allenamento per ogni esigenza</h2>
  <p class="mt-6 max-w-2xl text-xl text-gray-500">Se vuoi puoi giá scegliere un piano di allenamento. Qualsiasi sia la tua scelta, fisseremo un primo allenamento gratuito per conoscerci. La tua scelta non è in nessun caso vincolante.</p>

  <!-- Tiers -->
  <div class="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
    <div class="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <div class="flex-1">
        <h3 class="text-xl font-semibold text-gray-900">Mese singolo</h3>
        <p class="mt-4 flex items-baseline text-gray-900">
          <span class="text-5xl font-bold tracking-tight">€80</span>
          <span class="ml-1 text-xl font-semibold">/mese</span>
        </p>
        <p class="mt-6 text-gray-500">La base di partenza per costruire il tuo fisico.</p>

        <!-- Feature list -->
        <ul role="list" class="mt-6 space-y-6">
          <li class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="ml-3 text-gray-500">1 incontro dal vivo</span>
          </li>

          <li class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="ml-3 text-gray-500">Programma di allenamento per 4 settimane</span>
          </li>
        </ul>
      </div>

      <a  on:click={contactModal.show} class="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Iniziamo</a>
    </div>

    <div class="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <div class="flex-1">
        <h3 class="text-xl font-semibold text-gray-900">Prendiamo il controllo</h3>

        <p class="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 py-1.5 px-4 text-sm font-semibold text-white">Il più amato</p>
        <p class="mt-4 flex items-baseline text-gray-900">
          <span class="text-5xl font-bold tracking-tight">€130</span>
          <span class="ml-1 text-xl font-semibold">/mese</span>
        </p>
        <p class="mt-6 text-gray-500">Il piano per fare sul serio.</p>

        <!-- Feature list -->
        <ul role="list" class="mt-6 space-y-6">
          <li class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="ml-3 text-gray-500">2 incontri dal vivo al mese</span>
          </li>

          <li class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="ml-3 text-gray-500">Programma per ogni mese rivisto e discusso</span>
          </li>

          <li class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="ml-3 text-gray-500">Controllo e analisi delle performance fisiche e di prestazione</span>
          </li>
        </ul>
      </div>

      <a  on:click={contactModal.show} class="bg-indigo-500 text-white hover:bg-indigo-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Iniziamo</a>
    </div>

    <div class="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <div class="flex-1">
        <h3 class="text-xl font-semibold text-gray-900">Professionisti e atleti</h3>
        <p class="mt-4 flex items-baseline text-gray-900">
          <span class="text-5xl font-bold tracking-tight">€180</span>
          <span class="ml-1 text-xl font-semibold">/mese</span>
        </p>
        <p class="mt-6 text-gray-500">Allenamento di preparazione a livello agonistico</p>

        <!-- Feature list -->
        <ul role="list" class="mt-6 space-y-6">
          <li class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="ml-3 text-gray-500">3 incontri dal vivo al mese *</span>
          </li>

          <li class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="ml-3 text-gray-500">Scheda del mese analizzata e ritoccata dopo ogni seduta di allenamento</span>
          </li>

          <li class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="ml-3 text-gray-500">Tecniche avanzate di allenamento powerlifting</span>
          </li>

          <li class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="ml-3 text-gray-500">Preparazione agonistica</span>
          </li>

          <li class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="ml-3 text-gray-500">Controllo delle performance per gare powerlifting</span>
          </li>
        </ul>
      </div>

      <a  on:click={contactModal.show} class="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Iniziamo</a>
    </div>
  </div>

  <p class="mt-6 max-w-2xl text-l text-gray-500">* Da 4 incontri dal vivo al mese in su, il costo è di 50€ a lezione.</p>
</div>

<div class="bg-white">
  <div class="mx-auto max-w-7xl pb-12 px-4 text-center sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Coaching online</span>
    </h2>
    <p class="text-xl text-gray-500">Non lasciare che tempo e spazio siano un limite. Con il coaching online puoi raggiungere i tuoi obiettivi da qualsiasi luogo, in qualsiasi momento. Contattami per saperne di più.</p>
    <div class="mt-8 flex justify-center">
      <div class="inline-flex rounded-md shadow">
        <a  on:click={contactModal.show} class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Contattami</a>
      </div>
    </div>
  </div>
</div>