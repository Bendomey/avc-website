import { Home } from "../modules/home";
import { withApollo } from "../services/apollo";

export default withApollo({ ssr: true })(Home);
