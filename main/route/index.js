// ^import_component
import home from 'main/view/home/home';
// $import_component

const mainRoutes = [
	// ^routes_define
	{
		path: '/',
		name: 'home',
		component: home
	}// $routes_define
];

export default mainRoutes;