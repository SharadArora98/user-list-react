import React from "react";
import Card from "../UI/Card";
import styles from'./AddUserList.module.css';

export default function AddUserList(props) {
    return <Card className = {styles.users}>
        <ul>
            {props.users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
            ))}
        </ul>
    </Card>;
}