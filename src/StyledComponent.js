import styled, { css } from 'styled-components'

const sizes = {
  desktop: 1024,
  tablet: 768,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const Box = styled.div`
  background: ${({ color }) => color || 'blue'};
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto; // 기본적으로는 가운데 정렬
  /* 유틸 함수를 사용하지 않았을 때 
  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  } */

  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`}
`

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    cursor: pointer;
  }

  // 이런 식으로 조건을 걸어서 새로운 스타일을 적용시킬 수도 있다.
  ${({ inverted }) =>
    inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}

  & + button {
    margin-left: 1rem;
  }
`

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted>테두리만</Button>
    </Box>
  )
}

export default StyledComponent
