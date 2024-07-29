import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quizes from './components/Quizes/Quizes';
// import TopicsDetail from './components/TopicsDetail/TopicsDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home',
          loader: async () => {
            // const response = await fetch('https://openapi.programming-hero.com/api/quiz');
            const response = await fetch('topics.json');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); 
          },
          element: <Home></Home> },
        // {
          // path:'/home/:quizid',
          // loader:async({params})=>{
          //   // return fetch(`topics.json/${params.quizid}`)
          //   return fetch(`quizbyid.json/${params.quizid}`)
          // },
          {
            path: '/home/:quizid',
            loader: async ({ params }) => {
              const response = await fetch(`quizbyid.json`);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log('Fetched quiz data:', data);
              return data.data;
            },
            element: <Quizes></Quizes>
        },
        {path: '/topics', element: <Topics></Topics>},
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: '/blog', element: <Blog></Blog> },
      ]
    },
    { path: '*', element: <div>OOPS! #404# Page not found</div> }
  ]);

  return (
    <div className="App container mx-auto p-4">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

