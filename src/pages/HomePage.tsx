import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twin.macro';
import { increment } from '@/store/slices/counter/counterSlice';
import { RootState } from '@/store/store';

const H1 = tw.h1`text-3xl font-bold underline`;

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();

  const countState = useSelector((state: RootState) => state?.counter);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((res) => setTodos(res.todos));
  }, []);

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <div>
      {' '}
      <H1 className="text-3xl font-bold underline">Hello world!</H1>
      <h1>Vite</h1>
      <button type="button" onClick={() => setCount((preCount) => preCount + 1)}>
        count is {count}
      </button>
      <div>{todos.length && <div>Todo List : {todos.length}</div>}</div>
      <div>======= RTK =========</div>
      <p>State {countState?.value}</p>
      <div role="presentation" className="inline-block border" onClick={handleClick}>
        Increase
      </div>
    </div>
  );
};

export default HomePage;
