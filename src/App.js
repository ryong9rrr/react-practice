import { useCallback, useReducer, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos(range = 2500) {
  return Array.from({ length: range }, (_, i) => ({
    id: i,
    text: `할 일 ${i}`,
    checked: false,
  }));
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return [...todos, action.todo];
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

function App() {
  // createBulkTodos()를 넘겨주면 리렌더링될 때마다 함수가 호출되지만
  // 함수 자체를 넘겨주면 컴포넌트가 처음 렌더링될 때만 실행된다.
  //const [todos, setTodos] = useState(createBulkTodos)

  // 2번째 파라미터에 원래 초기값을 넣어주지만 그렇게 되면 리렌더링될 때마다 함수가 호출됨.
  // 이렇게 2번째에 undefined을 넣고 3번째에 초기값(함수)를 넣어주면 처음 렌더링 될때만 함수가 호출된다.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    //setTodos((todos) => [...todos, todo]);
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  });

  const onRemove = useCallback((id) => {
    //setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
