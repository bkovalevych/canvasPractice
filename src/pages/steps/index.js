import {Steps} from "./steps";
import get from "lodash/get";
import { connect } from "react-redux";
import {getSteps, updateStep, updateDecision} from "../../redux/actions/steps"


export const mapStateToProps = (state, secondParameter) => {
    return {
        steps: get(state, "steps", {}),
        ...secondParameter
    };
};

export const mapDispatchToProps = (dispatch) => ({
    updateStep: (props) => dispatch(updateStep(props)),
    getSteps: (props) => dispatch(getSteps(props)),
    updateDecision: (props) => dispatch(updateDecision(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Steps);
