import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
	root: {
		minHeight: "100vh",
		backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg4.jpg"})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
})

function Body() {
	const classes = useStyles()

	return <div className={classes.root}></div>
}

export default Body
