import React, {ChangeEventHandler, useState} from "react";
import {Input} from "../../Input/Input";
import {Item} from "../Item/ToDoItem";
import {Button} from "../../Button/Button";
import styles from "./style.module.css";

const generateUniqueId = () => {
    return "_" + Math.random().toString(16).slice(2);
};

interface IToDo {
    text: string
    id: string
}

const todos = [
    {text: "Test1", id: generateUniqueId()},
    {text: "Test2", id: generateUniqueId()},
    {text: "Test3", id: generateUniqueId()},
    {text: "Test4", id: generateUniqueId()},
    {text: "Test5", id: generateUniqueId()},
];

export const ToDoList = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState<IToDo[]>([])

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setText(event.target.value)
    };

    const addToDo = () => {
        const newToDo = {
            text: text,
            id: generateUniqueId(),
        }

        const newTodos = todos.concat([newToDo])
        setTodos(newTodos)
    };

    const removeToDo = (id: string) => {
        const newTodos = todos.filter((item) => {
            if (item.id === id) {
                return false
            }
            return true
        });
        setTodos(newTodos)
    }

    return (
        <div className={styles.listWrap}>
            <div className={styles.listWrapSearch}>
                <Input value={text} onChange={handleOnChange} />
                <Button text="Add" onClick={addToDo} disabled={false} type="primary" />
            </div>
            {todos.map((item) => {
                const onClickRemove = () => {
                    removeToDo(item.id)
                }
                return <Item key={item.id} text={item.text} onClickRemove={onClickRemove} />
            })}
        </div>
    )
}