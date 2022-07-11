import useInputs from './useInputs'

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  })

  const { name, nickname } = state

  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickname" value={nickname} onChange={onChange} />
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickname}</h1>
    </div>
  )
}

export default Info
