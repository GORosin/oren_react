import React from 'react';
import eagledream from './EDT_PWC-NewLogo-Navigation.png';
import alstom from './alstom.png';
import brookhaven from './brookhaven.png';
import excelero from './excelero.png';

function Experience(){
	return(
		<div className='experience'>
							<h1> Experience </h1>
			<ul style={{marginLeft:"30px",listStyleType:"none"}}>
			<li>
				<br/>
				<img src = {eagledream} id = "eagledream" alt = "EagleDream"/>
				<p>EagleDream focuses on helping businesses utilize AWS in their applications. My work for them involved developing tools for Identity and Access Management (IAM) in an AWS-hosted server. These tools allowed users to automatically remove permissions over time, adhering to the principle of least privilege.
				</p>
				<p>January 2020 - August 2020</p>
				<hr/>
			</li>
			<li>
				<br/>
				<img src = {alstom} className ="logo" alt = "Alstom Signaling"/>
				<p>
				Alstom Signaling focuses on cab signaling equipment and safety for cabs. They work with transportation agencies such as MBTA, NJT, and Amtrak. My work here involved optimizing a train routing program in C# to run faster by allowing the user to select a specific route to generate and eliminate unnecessary calculations.
				</p>
				<p>September 2018 - December 2019</p>
				<hr/>
			</li>
			<li>
				<br/>
				<img src = {brookhaven} className ="logo" alt = "Alstom Signaling"/>
				<p>At BNL, I created a software framework to conduct quality control tests on silicon detectors. Wrote a user friendly front end using Javascript/jQuery and created REST API in Python to control power supplies and chillers and retrieve sensor data.
				</p>
				<p>June 2018 - August 2018</p>
				<hr/>
			</li>
			<li>
				<br/>
				<img src = {excelero} className ="logo" alt = "Alstom Signaling"/>
				<p>At Excelero, I created a client-server side UDP messaging application in C and Python for the company’s software-defined block data storage solution.
				<p>June 2017 - July 2017</p>
				</p>
				<hr/>
			</li>
			</ul>
		</div>
	)
}
export default Experience;