import { useState, useEffect } from 'react'
import { client } from '../lib/sanity'

export function useSanity(query, fallback = null) {
  const [data, setData] = useState(fallback)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(query).then((result) => {
      if (result && (Array.isArray(result) ? result.length > 0 : Object.keys(result).length > 0)) {
        setData(result)
      }
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [query])

  return { data, loading }
}
