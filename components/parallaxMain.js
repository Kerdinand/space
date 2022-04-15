import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs';
import { useRef } from 'react';

import styles from './parallaxMain.module.css';

import Image from 'next/image';
import starSky from '../public/starsky.jpg';
import IssMap from './issMap';

const ParallaxMain = () => {
	const ref = useRef();
	return (
		<Parallax pages={2.5} ref={ref}>
			<ParallaxLayer
				offset={0}
				style={{
					backgroundImage: `url(starsky.jpg)`,
					backgroundSize: 'cover',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				factor={3}
				speed={1}
				onClick={() => ref.current.scrollTo(0.5)}
			>
				<div
					className={styles.about}
					id="about"
					onClick={() => ref.current.scrollTo(2)}
				>
					<h1 className={styles.h1}>Welcome To Space!</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Consequuntur quia minima cum, reprehenderit libero
						ipsa suscipit hic fuga unde sint minus laboriosam! Dolor
						odio possimus amet dicta, eos placeat autem. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Voluptas
						aliquam ut dolore excepturi cum tempora! Quam ipsum ipsa
						facilis. Nihil maxime architecto voluptatum fugit cumque
						quae eos debitis repudiandae excepturi. Lorem ipsum
						dolor, sit amet consectetur adipisicing elit. Excepturi
						architecto corrupti ratione quam quasi, veniam
						praesentium ab, voluptate nihil, ducimus voluptas quo
						nisi mollitia nobis natus temporibus facilis maxime ad.
						Quaerat quis voluptatum distinctio, temporibus
						aspernatur ipsum illum exercitationem nobis ad dolores
						ipsam iure repellendus iste minus excepturi ea
						praesentium nisi quasi. Quisquam inventore non magnam
						atque nesciunt necessitatibus distinctio. Harum officia
						praesentium incidunt nisi deleniti iusto commodi saepe,
						officiis numquam at consequuntur sequi quos id aliquam
						libero beatae earum aspernatur? Magnam consequuntur
						excepturi illo nam commodi tempore illum dicta? Corporis
						totam assumenda laboriosam facere explicabo officia aut
						labore fugit hic. Odio quos earum labore tempore
						temporibus modi veniam sapiente, recusandae sed
						provident inventore error, dolore eaque, cupiditate
						veritatis quo? Aut assumenda natus odio voluptatum
						nulla, ducimus consequuntur quam eveniet. Autem dolor
						perferendis nihil dignissimos asperiores modi libero
						accusantium soluta ipsum, accusamus sapiente unde earum
						corrupti porro facere aut quas!
					</p>
				</div>
			</ParallaxLayer>

			<ParallaxLayer
				offset={0.5}
				speed={2}
				style={{
					backgroundImage: `url(earth.png)`,
					backgroundPosition: 'center',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			></ParallaxLayer>

			<ParallaxLayer offset={1.5}>
				<h1>Website about the Iss</h1>
				<IssMap></IssMap>
			</ParallaxLayer>
		</Parallax>
	);
};

export default ParallaxMain;
