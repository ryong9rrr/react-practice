const { useState, useMemo, useCallback } = require('react')

const getAverage = (numbers) => {
  console.log('평균 값 계산중...')
  if (numbers.length === 0) return 0
  const sum = numbers.reduce((a, b) => a + b)
  return sum / numbers.length
}

const Average = () => {
  const [list, setList] = useState([])
  const [number, setNumber] = useState('')

  const onChange = useCallback((e) => {
    setNumber(e.target.value)
  }, [])

  const onInsert = useCallback(
    (e) => {
      const nextList = [...list, parseInt(number, 10)]
      setList(nextList)
      setNumber('')
    },
    [list, number]
  )

  const avg = useMemo(() => getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <div>평균값: {avg}</div>
    </div>
  )
}

export default Average
