import React from "react"
import { AppBar, CardMedia, Toolbar, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	bg: {
		background: "none",
	},
	logo: {
		height: 100,
		width: "100%",
	},
	mainbro: {
		justifyContent: "center",
		alignItems: "center",
	},
})
function Header() {
	const classes = useStyles()
	return (
		<>
			<AppBar className={classes.bg} elevation={0}>
				<Toolbar>
					<Typography variant="h3">Icarus Virtual Sports</Typography>
					<CardMedia
						style={{ height: 140, width: "auto" }}
						image={"./logo.png"}
					></CardMedia>
				</Toolbar>
			</AppBar>

			<main className={classes.mainbro}>
				<Grid container xs={12} jutsify="center" alignContent="center">
					<Grid item>
						<Typography variant="h7"> Center?</Typography>
					</Grid>
				</Grid>
			</main>
		</>
	)
}

export default Header
