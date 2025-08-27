import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './pages/about-us/AboutUs';
import ContactUs from './pages/contact-us/ContactUs';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: 'about-us', element: <AboutUs /> },
			{ path: 'contact-us', element: <ContactUs /> },
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);
