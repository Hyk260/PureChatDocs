export type StorageType = "local" | "session"

const isBrowser = typeof window !== "undefined";

export function createStorage<T extends object>(type: StorageType, storagePrefix: string = "") {
  const stg = isBrowser ? (type === "session" ? window.sessionStorage : window.localStorage) : null;

  const noopStorage = {
    set() {},
    get() { return null },
    remove() {},
    clear() {},
  };

  if (!stg) {
    return noopStorage as typeof storage;
  }

  const storage = {
    set<K extends keyof T>(key: K, value: T[K]) {
      const json = JSON.stringify(value)
      stg.setItem(`${storagePrefix}${key as string}`, json)
    },
    get<K extends keyof T>(key: K): T[K] | null {
      const json = stg.getItem(`${storagePrefix}${key as string}`)
      if (json) {
        let storageData: T[K] | null = null
        try {
          storageData = JSON.parse(json)
        } catch {}
        if (storageData) {
          return storageData as T[K]
        }
      }
      stg.removeItem(`${storagePrefix}${key as string}`)
      return null
    },
    remove(key: keyof T) {
      stg.removeItem(`${storagePrefix}${key as string}`)
    },
    clear() {
      stg.clear()
    },
  }

  return storage
}

export const localStg = createStorage<Record<string, any>>('local');
