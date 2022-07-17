import React, { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import { FIREBASE_URL } from '../core/api'

const AllMeetupsPage = () => {
  // 이 페이지에 들어오면 데이터 패칭을 시작하므로 초기값은 true여야한다.
  const [loading, setLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    fetch(`${FIREBASE_URL}/meetups.json`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const meetups = Object.entries(data).map(([key, value]) => ({ ...value, id: key }))
        setLoading(false)
        setLoadedMeetups(meetups)
      })
  }, [])

  if (loading) {
    return (
      <section>
        <h1>loading...</h1>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default React.memo(AllMeetupsPage)
