import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './pages/about-us/AboutUs';
import ContactUs from './pages/contact-us/ContactUs';
import { routes } from './utils/routes';

const router = createBrowserRouter([
	{
		path: routes.home,
		element: <App />,
	},
	{ path: routes.about, element: <AboutUs /> },
	{ path: routes.contact, element: <ContactUs /> },
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);
