import TextCounter from "./textCounter";
import get from "lodash/get";
import { connect } from "react-redux";
import {updateStep} from "../../redux/actions/steps"

export const mapStateToProps = (state, props) => {
    return {
        points: get(state, `steps.steps[${props.idStep}].points`, 0),
        gainedPoints: get(state, `steps.steps[${props.idStep}].gainedPoints`, 0),
        isDone: get(state, `steps.steps[${props.idStep}].isDone`, false),
        ...props
    };
};

export const mapDispatchToProps = (dispatch) => ({
    updateStep: (props) => dispatch(updateStep(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextCounter);