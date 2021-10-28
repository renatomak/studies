import React from 'react';
import style from  './List.style.module.scss'

const List = () => {
    const task = [
        {
            task: "React",
            time: "02:00:00"
        },
        {
            task: "JavaScript",
            time: "01:00:00"
        },
        {
            task: "TypeScript",
            time: "03:00:00"
        }
    ]
    return (
        <aside className={style.listTask}>
            <h2>Estudo do dia</h2>
            <ul>
                {task.map(({task, time}, index) => (
                    <li key={index} className={style.item}>
                    <h3>{task}</h3>
                    <span>
                        {time}
                    </span>
                </li>
                ))}
            </ul>
        </aside>
    );
}

export default List;