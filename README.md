# 11. 일정 관리 웹 애플리케이션 컴포넌트 성능 최적화

(Network: Fast 3G)

처음

- 초기 스크립팅: 629ms
- 렌더링: 12ms
- 페인팅: 2ms
- 기타 등등: 670ms
- 총 1312ms

1\. TodoListItem 컴포넌트를 React.memo로 감싸기
2-1\. onInsert, onRemove, onToggle 함수를 함수형 업데이트로 바꿈 (이렇게하면 useCallback에서 의존성을 빼줘도 된다.)
2-2\. useReducer 사용하기

- 초기 스크립팅: 351ms
- 렌더링: 8ms
- 페인팅: 1ms
- 기타 등등: 384ms
- 총 746ms

3\. `react-virtualized` 라이브러리를 사용해서 데이터 렌더링 최적화

- 초기 스크립팅: 130ms
- 렌더링: 1ms
- 페인팅: 0ms
- 기타 등등: 302ms
- 총 434ms
