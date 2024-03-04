import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body';
import HomePage from './components/HomePage';
import Error from './components/Error';
import PreviousYearPaper from './components/PreviousYearPaper';
import Notes from './components/Notes';

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
          element: <PreviousYearPaper/>
        }
      ],
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter}>
        
      </RouterProvider>
    </>
  )
}

export default App
