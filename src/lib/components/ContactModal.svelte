<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { contactModal } from "$lib/stores";
  import Transition from "svelte-class-transition";

  let toggle = false;

  let namePlaceholder = "";
  let surnamePlaceholder = "";
  let pointerEvent = "pointer-events-none";

  const bestPowerlifters = [
    {
      name: "Ed",
      surname: "Coan",
    },
    {
      name: "Zydrunas",
      surname: "Savickas",
    },
    {
      name: "Mark",
      surname: "Henry",
    },
    {
      name: "Bill",
      surname: "Kazmaier",
    },
    {
      name: "Paul",
      surname: "Anderson",
    },
    {
      name: "Brian",
      surname: "Shaw",
    },
    {
      name: "Andy",
      surname: "Bolton",
    },
    {
      name: "Hafþór Júlíus",
      surname: "Björnsson",
    },
    {
      name: "Mikhail",
      surname: "Koklyaev",
    },
    {
      name: "Eddie",
      surname: "Hall",
    },
  ];

  contactModal.subscribe((value) => {
    pointerEvent = !value ? "pointer-events-none" : "";
    toggle = value;

    if (!toggle) {
      return;
    }

    const i = randomIndex();
    namePlaceholder = bestPowerlifters[i].name;
    surnamePlaceholder = bestPowerlifters[i].surname;
  });

  function randomIndex() {
    return Math.floor(Math.random() * bestPowerlifters.length);
  }

  function encode(data: Record<string,string>) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}
</script>

<div
  class="block"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  <Transition
    {toggle}
    inTransition="ease-out duration-300"
    inState="opacity-0"
    onState="opacity-100"
    outTransition="ease-in duration-300"
  >
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
  </Transition>

  <div
    class="fixed {pointerEvent} inset-0 overflow-y-auto"
  >
    <div
      class="flex min-h-full items-center justify-center p-4 text-center sm:p-0"
    >
      <Transition
        {toggle}
        inTransition="ease-out duration-300"
        inState="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        onState="opacity-100 translate-y-0 sm:scale-100"
        outTransition="ease-in duration-200"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-12 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm"
        >
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/thanks.html"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div class="absolute top-0 right-0 pt-4 pr-4 block">
              <button
                type="button"
                on:click={contactModal.hide}
                class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <p class="mb-5 text-gray-700">
                Lasciami i tuoi contatti, ti contatterò io per fissare una
                seduta gratutita e per discutere dei tuoi desideri, necessità e
                obiettivi.
              </p>

              <div class="isolate -space-y-px rounded-md shadow-sm">
                <div
                  class="relative rounded-md rounded-b-none border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600"
                >
                  <label
                    for="name"
                    class="block text-xs font-medium text-gray-900">Nome</label
                  >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder={namePlaceholder}
                  />
                </div>
                <div
                  class="relative border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600"
                >
                  <label
                    for="surname"
                    class="block text-xs font-medium text-gray-900"
                    >Congnome</label
                  >
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder={surnamePlaceholder}
                  />
                </div>
                <div
                  class="relative border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600"
                >
                  <label
                    for="job-title"
                    class="block text-xs font-medium text-gray-900">Email</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="{namePlaceholder.toLowerCase()}.{surnamePlaceholder.toLowerCase()}@powerlifting.com"
                  />
                </div>
                <div
                  class="relative rounded-md rounded-t-none border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600"
                >
                  <label
                    for="job-title"
                    class="block text-xs font-medium text-gray-900"
                    >Telefono</label
                  >
                  <input
                    type="tel"
                    name="telephone"
                    id="telephone"
                    class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="+39 347 45 34 278"
                  />
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <button
                type="submit"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                >Invia</button
              >
            </div>
          </form>
        </div></Transition
      >
    </div>
  </div>
</div>
