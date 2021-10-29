import React from 'react';
import Item from './Item';
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
                {task.map((item, index) => (
                    <Item {...item} key={index} />
                ))}
            </ul>
        </aside>
    );
}

export default List;