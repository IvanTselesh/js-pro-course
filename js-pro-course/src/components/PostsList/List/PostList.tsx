import React from "react";
import {PostItem} from "../PostItem/PostItem";

const generateUniqueId = () => {
    return "_" + Math.random().toString(16).slice(2);
};

// const todos = [
//     {id: generateUniqueId(), text: item.text, date: , title: },
//     {id: generateUniqueId()},
//     {id: generateUniqueId()},
//     {id: generateUniqueId()},
//     {id: generateUniqueId()},
// ]

// export const PostList = () => {
//     return (
//         <div>
//             {todos.map((item) => {
//                 return <PostItem id={item.id} text={item.text} date={item.date} title={item.title} />
//             })}
//         </div>
//     )
// };