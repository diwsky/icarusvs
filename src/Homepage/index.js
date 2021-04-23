import React from "react"
import {
	Typography,
	Card,
	Paper,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Container,
	IconButton,
	AppBar,
	Toolbar,
	CardActions,
	Button,
} from "@material-ui/core"
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun"
import useStyles from "./styles"
import Header from "../components/Header"

export default function Homepage() {
	const classes = useStyles()
	return (
		<div className={classes.background}>
			<CssBaseline />
			<Header />
		</div>
	)
}
