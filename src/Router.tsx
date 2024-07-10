import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ExploreTemplates } from './pages/ExploreTemplates';
import { EditTemplate } from './pages/EditTemplate';
import { CustomTemplate } from './pages/CustomTemplate';
import { YourMemes } from './pages/YourMemes';
import { AboutPage } from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/explore-templates',
    element: <ExploreTemplates />,
  },
  {
    path: '/templates/:id',
    element: <EditTemplate />,
  },
  {
    path: '/custom-template',
    element: <CustomTemplate />,
  },
  {
    path: '/your-memes',
    element: <YourMemes />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
