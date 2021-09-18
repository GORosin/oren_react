import React from 'react';
import oren_portrait from './oren_portrait.jpg';

function Home(){
	return(
		<div className='home'>
			<div className='textbox'>
			<img src = {oren_portrait} id = "guy_portrait" alt = "oren"/>
			<h1 className='home-textbox'>Oren Rosin</h1>
			<h4>B.Sc Software Engineering</h4>
			<h4>Full Stack Development</h4>
			</div>
		</div>
	)
}
export default Home;