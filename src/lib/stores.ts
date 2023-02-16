import { writable } from "svelte/store";

function createContactModal() {
  const { subscribe, update } = writable(false);

  return {
    subscribe,
    show: () => update(val => val = true),
    hide: () => update(val => val = false),
  };
}

export const contactModal = createContactModal();