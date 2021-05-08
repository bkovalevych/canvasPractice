import {Topics} from "./topics";
import get from "lodash/get";
import { connect } from "react-redux";
import {updateBasket} from "../../redux/actions/goods"
export const mapStateToProps = (state) => {
    return {
        goods: get(state, "goods.goods", []),
        countGoodsInBasket: get(state, "goods.count", 0)
    };
};

export const mapDispatchToProps = (dispatch) => ({
    updateBasket: (props) => dispatch(updateBasket(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);