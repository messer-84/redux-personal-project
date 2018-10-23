// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskActions } from '../../bus/task/action';
import { bindActionCreators } from 'redux';
// Instruments
import Styles from './styles.m.css';
// import { tasks } from './tasks';

// Components
import Task from '../Task';
import Checkbox from '../../theme/assets/Checkbox';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            handleAddTask: taskActions.addTask,
        },
        dispatch),
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Scheduler extends Component {
    state = {
        taskField: '',
    };
    _handleAddTask = (e) => {
        const { actions } = this.props;

        e.preventDefault();
        actions.handleAddTask(this.state.taskField);
        this.setState({
            taskField: '',
        });
    };
    _handleInput = (e) => {
        this.setState({
            taskField: e.target.value,
        });
    };

    render () {
        const { tasks } = this.props;
        console.log(tasks);

        const todoList = tasks.map((task, index) => (
            <Task
                completed = { task.get('completed') }
                favorite = { task.get('favorite') }
                id = { task.get('id') }
                index = { index }
                key = { task.get('id') }
                message = { task.get('message') }
                { ...task }
            />
        ));

        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input placeholder = 'Поиск' type = 'search' />
                    </header>
                    <section>
                        <form>
                            <input
                                className = { Styles.createTask }
                                maxLength = { 50 }
                                placeholder = 'Описание моей новой задачи'
                                type = 'text'
                                value = { this.state.taskField }
                                onInput = { this._handleInput }
                            />
                            <button onClick = { this._handleAddTask }>Добавить задачу</button>
                        </form>
                        <div className = { Styles.overlay }>
                            <ul>{todoList}</ul>
                        </div>
                    </section>
                    <footer>
                        <Checkbox checked color1 = '#363636' color2 = '#fff' />
                        <span className = { Styles.completeAllTasks }>
                            Все задачи выполнены
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}
