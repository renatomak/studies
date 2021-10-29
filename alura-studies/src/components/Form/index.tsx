import React from 'react';
import Button from '../Button';
import style from './Form.style.module.scss'

class Form extends React.Component {
    state = {
        task: "",
        time: "00:00"
    }
    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Adicionar um novo estudo
                    </label>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={event => this.setState({...this.state, task: event.target.value})}
                        id="task"
                        placeholder="O que você quer estudar"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        value={this.state.time}
                        onChange={event => this.setState({...this.state, time: event.target.value})}
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button >
                    Adicionar
                </Button>
            </form>
        );
    }
}

export default Form;