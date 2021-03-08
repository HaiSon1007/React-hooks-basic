import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox'
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Hello, What are you doing?' },
    { id: 2, title: 'Hello, How are you today?' },
    { id: 3, title: 'Hello, What do you do?' },
  ])

  const [postList, setPostList] = useState([])

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1"
        const response = await fetch(requestUrl)
        const responceJSON = await response.json()
        const { data } = responceJSON
        setPostList(data)
      } catch (error) {
        console.log("FAILED fetch post lIst", error.message)
      }
    }
    fetchPostList()
  }, [])

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return

    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }

  return (
    <div className="app">
      {/* <h1>React Hooks ColorBox</h1>
      <ColorBox />
      <h1>React Hooks TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      <h1>React hooks Post list</h1>
      <PostList posts={postList} />

    </div>
  );
}

export default App;
