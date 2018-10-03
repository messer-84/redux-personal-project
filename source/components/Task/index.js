// Core
import React, { PureComponent } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { toggleFavoriteTask } from '../../bus/task/action';
import { bindActionCreators } from 'redux';

// Instruments
import Styles from './styles.m.css';

// Components
import Checkbox from '../../theme/assets/Checkbox';
import Remove from '../../theme/assets/Remove';
import Edit from '../../theme/assets/Edit';
import Star from '../../theme/assets/Star';

class Task extends PureComponent {
    _toggleFavoriteTask = () => {
        const { index } = this.props;

        this.props.toggleFavorite(index);
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
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                    />
                    <input disabled type = 'text' value = { message } />
                </div>
                <div className = { Styles.actions }>
                    <Star
                        checked = { favorite }
                        inlineBlock
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

const mapStateToProps = (state) => ({
    task: state.task,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { toggleFavorite: toggleFavoriteTask },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Task);
