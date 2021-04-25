import React from "react"
import {
	AppBar,
	Paper,
	Toolbar,
	Grid,
	Typography,
	Button,
	Container,
	Card,
} from "@material-ui/core"
import Logo from "./Logo"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	root: {
		minHeight: "100vh",
		backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg3.jpg"})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
	},
	AppBar: {
		background: "none",
		padding: "20 100",
	},
	toolbar: {
		width: "80%",
		margin: "0 auto",
	},
	mainText: {
		flexGrow: "1",
		color: "#000",
		fontFamily: "Anton",
	},
	icarusText: {
		color: "#5A83A5",
	},
	mainButton: {
		color: "#fff",
		backgroundColor: "#5A83A5",
	},
	secondButton: {
		color: "",
	},
	welcomeText: {
		fontFamily: "Anton",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
	},
	mainPaper: {
		opacity: "0.9",
		padding: 30,
		backgroundColor: "#eeffffff",
	},
})
function Header() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<AppBar className={classes.AppBar} elevation={0}>
				<Toolbar className={classes.toolbar} disableGutters>
					<Logo height={70} />
					<Typography className={classes.mainText} variant="h3">
						<span className={classes.icarusText}>ICARUS</span> Virtual Sports
					</Typography>
					<Button className={classes.mainButton} variant="contained">
						Sign in
					</Button>
				</Toolbar>
			</AppBar>

			<main>
				<Container>
					<Paper
						className={classes.mainPaper}
						square={false}
						variant="elevation"
					>
						<Grid
							container
							direction="column"
							spacing={1}
							justifyContent="center"
							alignItems="center"
						>
							<Grid item xs={12}>
								<h1 className={classes.welcomeText}>
									Create your own virtual sport event!
								</h1>

								<Typography variant="h5" align="center" paragraph>
									Whether you're a runner, cyclist or walker, join thousands of
									people to compete or support a cause.
								</Typography>
							</Grid>
							<Grid container justify="space-around">
								<Grid item xs={3} alignContent="center">
									<Button
										className={classes.mainButton}
										size="large"
										variant="contained"
									>
										{" "}
										Create event
									</Button>
								</Grid>
								<Grid item xs={3}>
									<Button
										className={classes.secondButton}
										size="large"
										variant="outlined"
									>
										{" "}
										Join an event
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Container>
			</main>
		</div>
	)
}

export default Header
