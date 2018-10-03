// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../bus/task/action';
import { bindActionCreators } from 'redux';
// Instruments
import Styles from './styles.m.css';
// import { tasks } from './tasks';

// Components
import Task from '../Task';
import Checkbox from '../../theme/assets/Checkbox';

class Scheduler extends Component {
    state = {
        taskField: '',
    };
    _handleAddTask = (e) => {
        e.preventDefault();
        this.props.handleAddTask(this.state.taskField);
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

        const todoList = tasks.map((task, index) => (
            <Task
                completed = { task.completed }
                favorite = { task.favorite }
                id = { task.id }
                index = { index }
                key = { task.id }
                message = { task.message }
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
                                value={this.state.taskField}
                                onInput={this._handleInput}
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

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { handleAddTask: addTask },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);
