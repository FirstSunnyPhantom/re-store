import Spinner from "../spinner";
import withServiceBookstore from "../hoc";

const App = () => {
	return <Spinner/>;
};

export default withServiceBookstore()(App);