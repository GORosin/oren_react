import React from 'react';

function Projects(){
	return(
		<div className='projects'>
					<h1> Projects </h1>
			<ul style={{marginLeft:"50px",listStyleType:"none"}}>
			<li>
				<h4>Used Cars Quality Predictor</h4>
				<p>A boosted decision tree model that analyzes data on used car sales to determine if the sale was worth the price or not. The data is on the car that was sold, the time and place of the sale. The best results were from a gradient boosted decision tree with about 90% accuracy.
				</p>
				<a className="paper" href="https://jovian.ai/rosin-oren/used-car-quality-predictor">
				https://jovian.ai/rosin-oren/used-car-quality-predictor
				</a>
				<hr/>
			</li>
			<li>
				<h4>House Energy Predictor</h4>
				<p>
				A regression model in Pytorch to predict the energy used to heat or cool down a house based on the properties of the house.
				</p>
				<a className="paper" href="https://medium.com/@oren.rosin/predicting-house-energy-usage-in-pytorch-98a44be639a7">
				https://medium.com/@oren.rosin/predicting-house-energy-usage-in-pytorch-98a44be639a7
				</a>
				<hr/>
			</li>
			<li>
				<h4>GPS Project</h4>
				<p>A statistical model of GPS data from a typical drive around Rochester. First the data was cleaned and reorganized into useful data frames. Then the goal is to predict starts, stops, and sharp turns.
				</p>
				<a className="paper" href="https://github.com/GORosin/GPS_Project_CS420">
				https://github.com/GORosin/GPS_Project_CS420
				</a>
				<hr/>
			</li>
			<li>
				<h4>AAPT Website</h4>
				<p>An example website redesign submitted to the new england branch of the American association of physics teachers, who is looking to update their website. Written in JavaScript/React, it is designed to be a seamless transition from the old site while improving the user experience.
				</p>
				<a className="paper" href="https://github.com/GORosin/AAPT-NES">
				https://github.com/GORosin/AAPT-NES
				</a>
				<hr/>
			</li>
			</ul>
		</div>
	)
}
export default Projects;