import { useState, useEffect } from 'react'

const intelligentJSONParser = (textToBeParsed: string) => {
  let ans: unknown
  try {
    ans = JSON.parse(textToBeParsed)
  } catch (e) {
    return textToBeParsed
  }
  return ans
}

/**
 * State persists on LocalStorage, however it is synchronized, therefore allowing
 * multiple tabs show the same value for the given state at the same time
 *
 * @param key of the LocalStorage item
 * @param initialValue in case there is no LocalStorage item for the given key
 * @returns current localstorage item and update localstorage function
 */
export default function useLocalStorageSynchronized<T>(
  key: string,
  initialValue: T | (() => T)
): [T, (newState: T) => void] {
  const [state, setState] = useState<T>(() => {
    const json = localStorage.getItem(key)

    if (json) {
      return JSON.parse(json) as T
    }

    if (typeof initialValue === 'function') {
      // @ts-ignore
      return initialValue() as T
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    const onStorageUpdate = (e: StorageEvent) => {
      if (key === e.key) {
        const { newValue } = e

        if (newValue === null) return

        const processedValue = intelligentJSONParser(newValue)
        setState(processedValue as T)
      }
    }

    window.addEventListener('storage', onStorageUpdate)
    return () => {
      window.removeEventListener('storage', onStorageUpdate)
    }
  }, [key])

  const onChange = (newState: T) => {
    setState(newState)
    localStorage.setItem(key, JSON.stringify(newState))
  }

  return [state, onChange]
}
