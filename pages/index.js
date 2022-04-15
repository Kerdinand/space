import styles from '../styles/Home.module.css';

import ParallaxMain from '../components/parallaxMain';

export default function Home() {
	return (
		<div className={styles.main}>
			<ParallaxMain></ParallaxMain>
		</div>
	);
}
