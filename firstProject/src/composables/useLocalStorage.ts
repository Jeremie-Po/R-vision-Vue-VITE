import type {Ref} from "vue";
import {ref, watch} from "vue";

// https://gist.github.com/JeffreyWay/b6616a64732e2a248e39115714821927


export function useLocalStorage<T>(key: string, defaultValue: T = null as unknown as T): Ref<T> {
  const data: Ref<T> = ref(defaultValue) as Ref<T>;

  // Tenter de lire depuis localStorage
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      // Tenter de parser comme JSON
      try {
        data.value = JSON.parse(storedValue) as T;
      } catch (e) {
        console.warn(`Invalid JSON for key "${key}": ${storedValue}. Using default value instead.`);
        // En cas d'échec, on utilise la valeur par défaut et on nettoie
        if (defaultValue !== null) {
          localStorage.setItem(key, JSON.stringify(defaultValue));
        } else {
          localStorage.removeItem(key);
        }
      }
    } else if (defaultValue !== null) {
      // Initialiser avec la valeur par défaut si rien n'existe
      localStorage.setItem(key, JSON.stringify(defaultValue));
    }
  } catch (e) {
    console.error(`Error accessing localStorage:`, e);
  }

  watch(data, () => {
    try {
      if (data.value === null || data.value === '') {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(data.value));
      }
    } catch (e) {
      console.error(`Error writing to localStorage:`, e);
    }
  }, {deep: true});

  return data;
}
