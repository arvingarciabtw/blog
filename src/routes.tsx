import App from "./App";
import ErrorPage from "./components/pages/ErrorPage";
import HomePage from "./components/pages/HomePage";
import ArticlePage from "./components/pages/ArticlePage";

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{index: true, element: <HomePage />},
			{path: "/:url", element: <ArticlePage />},
		],
	},
];

export default routes;
