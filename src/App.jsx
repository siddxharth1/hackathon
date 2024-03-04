import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body';
import HomePage from './components/HomePage';
import Error from './components/Error';
import PreviousYearPaper from './components/PreviousYearPaper';
import Notes from './components/Notes';
import TeePaper from './components/TeePaper';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
      errorElement: <Error/>,
      children:[
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/notes",
          element: <Notes/>
        },
        {
          path: "/pyp",
          element: <PreviousYearPaper/>,
          children:[
            {
              path: "mid",
              element: <TeePaper/>
            },
            {
              path: "tee",
              element: <TeePaper/>
            }
          ]
        }
      ],
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },
  ])

  return (
    <>
      <RouterProvider router={appRouter}>
        
      </RouterProvider>
    </>
  )
}

export default App
