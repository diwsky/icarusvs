import { makeStyles } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

const classes = makeStyles(theme => ({
	background: {},

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
