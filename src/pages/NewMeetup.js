import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NewMeetupForm } from '../components/meetups'
import { FIREBASE_URL } from '../core/api'

const NewMeetupPage = () => {
  const navigate = useNavigate()

  //firebase를 사용했음.
  // 1. API_END_POINT 뒤에 /meetups 라고 하면 meetups라는 이름으로 데이터 테이블이 생성된다.
  // 2. 그리고 뒤에 .json을 붙여준다.
  const handleSubmit = async (meetupData) => {
    try {
      const response = await fetch(`${FIREBASE_URL}/meetups.json`, {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.status === 200) {
        const firebaseId = await response.json()
        // 반환값은 firebase가 생성한 데이터의 id가 반환됨!
        // type firebaseId = { name: string }
        console.log(firebaseId)
        navigate('/', { replace: true })
        return
      }
      throw new Error('양식 제출에 실패했습니다.')
    } catch (e) {
      console.error(`양식 제출에 실패했습니다. ${e}`)
    }
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onSubmit={handleSubmit} />
    </section>
  )
}

export default React.memo(NewMeetupPage)
