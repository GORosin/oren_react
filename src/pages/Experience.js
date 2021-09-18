import React from 'react';

function Experience(){
	return(
		<div className='experience'>
							<h1> Experience </h1>
			<ul style={{marginLeft:"50px",listStyleType:"none"}}>
			<li>
				<h4>EagleDream Technologies:</h4>
				<p>EagleDream focuses on helping businesses utilize AWS in their applications. My work for them involved developing tools for Identity and Access Management (IAM) in an AWS-hosted server. These tools allowed users to automatically remove permissions over time, adhering to the principle of least privilege.
				</p>

				<hr/>
			</li>
			<li>
				<h4>Alstom Signaling</h4>
				<p>
				This company focuses on cab signaling equipment and safety for cabs. They work with transportation agencies such as MBTA, NJT, and Amtrak. My work here involved optimizing a train routing program in C# to run faster by allowing the user to select a specific route to generate and eliminate unnecessary calculations.
				</p>
				<hr/>
			</li>
			<li>
				<h4>Brookhaven National Laboratory</h4>
				<p>I created a software framework to conduct quality control tests on silicon detectors. Wrote a user friendly front end using Javascript/jQuery and created REST API in Python to control power supplies and chillers and retrieve sensor data.
				</p>
				<hr/>
			</li>
			<li>
				<h4>Excelero</h4>
				<p>I created a client-server side UDP messaging application in C and Python for the company’s software-defined block data storage solution.
				</p>
				<hr/>
			</li>
			</ul>
		</div>
	)
}
export default Experience;