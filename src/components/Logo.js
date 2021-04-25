import React from "react"
import logo from "../assets/logo.png"

const Logo = props => {
	return (
		<div style={{ justifyContent: "center" }}>
			<img src={logo} alt="Logo" style={{ height: props.height }}></img>
		</div>
	)
}

export default Logo
