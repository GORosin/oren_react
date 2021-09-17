import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import {Link } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';


function Navbar(){
	const [sidebar, setSidebar] = useState(true);

	const showSidebar = () => setSidebar(!sidebar);
	
	return(
	<div>
		<IconContext.Provider value={{color: '#fff'}}>
		<div className="navbar">
			<Link to='#' className = 'menu-bars'>
			   <FaIcons.FaBars onClick={showSidebar}/>
			</Link>
			<span>
				<a href="https://www.linkedin.com/in/oren-rosin/">
				LinkedIn</a>
				<a href="https://github.com/GORosin">
				Github</a>
				<a href="https://jovian.ai/rosin-oren">
				Jovian</a>	
			</span>
		</div>
		<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>	
			<ul className='nav-menu-items'>
				<li className='navbar-toggle'>
					<Link to='#' className = 'menu-bars'>
						<FaIcons.FaBars onClick={showSidebar}/>
					</Link>
				</li>
				{SidebarData.map((item,index)=>{
					return(
						<li key={index} className={item.cName}>
							<Link to={item.path}>
								{item.icon}
								<span>
									{item.title}
								</span>
							</Link>
						</li>
					)
				})}
				<li className='contact'>
					<p className='contact-me'>Contact Me</p>
				</li>
				<li>
					<a className='contact-info' href="https://rosin.oren@gmail.com">
					rosin.oren@gmail.com</a>
				</li>
				<li>
					<p className='contact-info'>617-669-1486</p>
				</li>
			</ul>
		</nav>
		</IconContext.Provider>
	</div>
	)
}
export default Navbar;