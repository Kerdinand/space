import Menu from './menu';

const Layout = ({ children }) => {
	return (
		<div>
			<nav>
				<Menu></Menu>
			</nav>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
