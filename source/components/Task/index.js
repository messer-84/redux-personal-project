// Core
import React, { PureComponent } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { taskActions } from '../../bus/task/action';
import { bindActionCreators } from 'redux';

// Instruments
import Styles from './styles.m.css';

// Components
import Checkbox from '../../theme/assets/Checkbox';
import Remove from '../../theme/assets/Remove';
import Edit from '../../theme/assets/Edit';
import Star from '../../theme/assets/Star';

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            toggleFavoriteTask:  taskActions.toggleFavoriteTask,
            toggleCompletedTask: taskActions.toggleCompletedTask,
        },
        dispatch),
    };
};

@connect(null, mapDispatchToProps)
export default class Task extends PureComponent {
    _toggleFavoriteTask = () => {
        const { actions, index } = this.props;

        actions.toggleFavoriteTask(index);
    };

    _toggleCompletedTask = () => {
        const { actions, index } = this.props;

        actions.toggleCompletedTask(index);
    };

    render () {
        const { message, completed, favorite } = this.props;

        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });

        return (
            <li className = { styles }>
                <div className = { Styles.content }>
                    <Checkbox
                        inlineBlock
                        checked = { completed }
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                        onClick = { this._toggleCompletedTask }
                    />
                    <input disabled type = 'text' value = { message } />
                </div>
                <div className = { Styles.actions }>
                    <Star
                        inlineBlock
                        checked = { favorite }
                        className = { Styles.toggleTaskFavoriteState }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._toggleFavoriteTask }
                    />
                    <Edit
                        inlineBlock
                        checked = { false }
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                    />
                    <Remove
                        inlineBlock
                        className = { Styles.removeTask }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                    />
                </div>
            </li>
        );
    }
}
