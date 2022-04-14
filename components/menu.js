import styles from './menu.module.css';

const Menu = () => {
	return (
		<div className={styles.div}>
			<ul className={styles.ul}>
				<li>Home</li>
				<li>
					{' '}
					<a href="#about">About</a>{' '}
				</li>
				<li>Map</li>
				<li>Contact</li>
				<li>Source</li>
			</ul>
		</div>
	);
};

export default Menu;
