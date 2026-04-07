
import { Routes, Route } from 'react-router-dom';
import { Apply, Home, JobDetails } from './pages';
import Jobs from './pages/Jobs';

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/jobs" element={<Jobs />} />
		<Route path="/jobs/:id" element={<JobDetails />} />
		<Route path="/apply" element={<Apply />} />
		{/* Add more routes as needed */}
	</Routes>
);

export default AppRoutes;
