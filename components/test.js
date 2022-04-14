import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs';
import Image from 'next/image';
import starSky from '../public/starsky.jpg';

const Test = () => {
	return (
		<Parallax pages={2}>
			<ParallaxLayer
				offset={0}
				style={{
					backgroundImage: `url(starsky.jpg)`,
					backgroundSize: 'cover',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				span={1}
			>
				<h1>Welcome!</h1>
			</ParallaxLayer>

			<ParallaxLayer offset={1} id="about">
				<h1>Website about the Iss</h1>
			</ParallaxLayer>
		</Parallax>
	);
};

export default Test;
