import React from 'react';
import guy_portrait from './oren_portrait.jpg';

function Home(){
	return(
		<div className='home'>
			<div className='textbox'>
			<img src = {guy_portrait} id = "guy_portrait" alt = "guy"/>
			<h1 className='home-textbox'>Oren Rosin</h1>
			</div>
		</div>
	)
}
export default Home;