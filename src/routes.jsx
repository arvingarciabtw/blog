import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

const router = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/:id', element: <ArticlePage /> },
    ],
  },
];

export default router;
