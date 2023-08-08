import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo3.png'
import { AuthContext } from '../context/authContext'

const Navbar = () => {

	const { currentUser, logout } = useContext(AuthContext)

	return (
		<div className='navbar'>
			<div className="container">

				<div className="logo">
					<Link className='link' to='/'>
						<img src={Logo} alt="Logo" />
					</Link>
				</div>

				<div className="links">
					<Link className='link' to='/?cat=men'>
						<h6>MEN FASHION</h6>
					</Link>
					<Link className='link' to='/?cat=women'>
						<h6>WOMEN FASHION</h6>
					</Link>
					<Link className='link' to='/?cat=unisex'>
						<h6>UNISEX</h6>
					</Link>
					<Link className='link' to='/?cat=jewelry'>
						<h6>JEWELRY</h6>
					</Link>
					<Link className='link' to='/?cat=electronics'>
						<h6>ELECTRONICS</h6>
					</Link>
					<span>{currentUser?.username}</span>
					{currentUser ?
						<span onClick={logout}>Logout</span>
						:
						<Link className='link' to='/login'><span>Login</span></Link>}
					<span className='write'>
						<Link className='link' to="/write">Write</Link>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Navbar