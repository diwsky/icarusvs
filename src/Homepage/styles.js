import { makeStyles } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

const classes = makeStyles(theme => ({
	background: {
		minHeight: "100vh",
		backgroundImage: `url(${
			process.env.PUBLIC_URL + "/assets/background.jpg"
		})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
	logo: {
		height: "100%",
		width: "auto",
		paddingTop: "2%",
	},
	mainContainer: {
		backgroundColor: "#F3f3f3",
		margin: 10,
		display: "flex",
		justifyContent: "center",
	},
	mainImage: {
		backgroundImage: "https://source.unsplash.com/random",
		height: 100,
	},
}))

export default classes
