import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProductAction} from '../actions';
class AfterLogin extends Component {
    componentDidMount(){
        this.props.getProductAction();
    }
    render() {
        debugger;
        return (
            <div align={'center'}>
                <h4>My Products</h4>
                <div className={'col-md-6'}>
                <table className="table table-bordered  table-hover bg-title">
                    <thead>
                    <tr align="center">
                        <th>PRODUCT NAME</th>
                        <th>MANUFACTURER NAME</th>
                        <th>STOCK</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.product.result && this.props.product.result.map((prod)=>{
                            return(
                            <tr>
                                <td>{prod.productName}</td>
                                <td>{prod.manufacturer}</td>
                                <td>{prod.stock}</td>
                            </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return (
        {
            product:state.products
        }
    )
};
const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({getProductAction},dispatch)
};
export default connect(mapStateToProps,matchDispatchToProps)(AfterLogin);
