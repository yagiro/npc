import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { mockData } from '../../config/mockData';

class ComparePanelCtrlTmp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCompare: false,
            models: props.models
        };
        this.modelOne = React.createRef();
        this.modelTwo = React.createRef();
        this.modelThree = React.createRef();
    }

    handlerCompareModelChange = (ref, model) => {
        const { models, onChange } = this.props;
        let newModels = [...models];
        if (ref.current.checked) {
            newModels.push(model);
        } else {
            newModels = newModels.filter( val => val.price !== model.price );
        }
        onChange(newModels);
    };

    render() {
        const { show, onShow } = this.props;
        return (
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <input
                    id="compare_checkbox"
                    type="checkbox"
                    checked={ show }
                    onChange={ () => onShow(!show) }
                />
                <label htmlFor="compare_checkbox">
                    Show compare panel
                </label>

                <input
                    id="model_one"
                    name="model_one"
                    type="checkbox"
                    ref={ this.modelOne }
                    onClick={ (event) => {
                        this.handlerCompareModelChange(this.modelOne, mockData.compareList[0]);
                    } }
                />
                <label htmlFor="model_one">
                    Model 1
                </label>

                <input
                    id="model_two"
                    type="checkbox"
                    ref={ this.modelTwo }
                    onClick={ (event) => {
                        this.handlerCompareModelChange(this.modelTwo, mockData.compareList[1]);
                    } }
                />
                <label htmlFor="model_two">
                    Model 2
                </label>
                <input
                    id="model_tree"
                    type="checkbox"
                    ref={ this.modelThree }
                    onClick={ (event) => {
                        this.handlerCompareModelChange(this.modelThree, mockData.compareList[2]);
                    } }
                />
                <label htmlFor="model_tree">
                    Model 3
                </label>
            </div>
        );
    }

};

ComparePanelCtrlTmp.defaultProps = {
    models: [],
};

ComparePanelCtrlTmp.propTypes = {
    show: PropTypes.bool,
    onShow: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ComparePanelCtrlTmp;

