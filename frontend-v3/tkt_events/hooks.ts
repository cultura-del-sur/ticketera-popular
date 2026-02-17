'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { I_Event } from '@/tkt_events/types'
import { API_BASE } from '@/config'

const useFeaturedEvents = () => {
  const [events, setEvents] = useState<Array<I_Event>>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get<Array<I_Event>>(`${API_BASE}/api/events/featured/`)
      .then((res) => {
        setEvents(res.data)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return { events, isLoading, error }
}

export { useFeaturedEvents }
