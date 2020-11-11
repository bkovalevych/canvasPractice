import { Authorization } from "./component";
import get from "lodash/get";
import { signUpAction } from "../../redux/actions/user";
import { connect } from "react-redux";

export const mapStateToProps = (state) => {
  return {
    fetching: get(state, "user.fetching", false),
    errors: get(state, "user.errors", {}),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  signUp: (props) => dispatch(signUpAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
