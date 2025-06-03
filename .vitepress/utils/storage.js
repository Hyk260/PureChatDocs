// 'local' | 'session';
export function createStorage(type, storagePrefix = "") {
  const stg = type === 'session' ? window.sessionStorage : window.localStorage;

  const storage = {
    set(key, value) {
      const json = JSON.stringify(value);

      stg.setItem(`${storagePrefix}${key}`, json);
    },
    get(key) {
      const json = stg.getItem(`${storagePrefix}${key}`);
      if (json) {
        let storageData = null;

        try {
          storageData = JSON.parse(json);
        } catch { }

        if (storageData) {
          return storageData;
        }
      }

      stg.removeItem(`${storagePrefix}${key}`);

      return null;
    },
    remove(key) {
      stg.removeItem(`${storagePrefix}${key}`);
    },
    clear() {
      stg.clear();
    }
  };
  return storage;
}

export const localStg = createStorage('local');
