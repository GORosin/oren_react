import React from 'react';
import selfie from './tel_aviv_selfie.jpg';

function About(){
	return(
		<div className='about'>
							<h1> About Me </h1>
	   <img src = {selfie} id = "guy" alt = "guy"/>
		<p>I am a  graduate of Rochester Institute of Technology with a B.Sc. in software engineering. I love the software development process, paticularly designing front end UIs. I have completed intenships in Alstom Signaling, Brookhaven National Lab, and Excelero. 
		</p>
		<p>I collaborate well with others, and am comfortable working in a team environment or as an individual contributor. I’m a strong communicator and retain new information easily, and welcome the opportunity to develop my interpersonal skills further. I’m committed to doing the highest quality work, and ensure my projects are done correctly and on time.</p>
		<p> In my spare time I like to read, watch good TV dramas and  play strategy games. I also occasionally dabble in drawing and painting.
		</p>
		<p> This website was built in React from scratch by me.
		</p>
		</div>
	)
}
export default About;
