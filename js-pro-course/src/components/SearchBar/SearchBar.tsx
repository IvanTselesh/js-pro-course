import React, {ChangeEventHandler, useState} from "react";
import {Input} from "../Input/Input";
import {IPost} from "../../types/post";
import {PostItem} from "../PostsList/PostItem/PostItem";
import styles from "../PostsList/List/style.module.css";

interface ISearchText {
  posts: IPost[]
}

export const SearchBar = ({posts}: ISearchText) => {
  const [searchText, setSearchText] = useState('');

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value)
  };

  const filteredPostList = posts.filter((item: IPost) => {
    if(item.title.toLowerCase().includes(searchText) ||
      item.text.toLowerCase().includes(searchText)
    ) {
      return true
    } else {
      return false
    }
  })

  return (
    <div>
      <Input value={searchText} onChange={handleOnChange} />
      {searchText === '' ? null : <ul className={styles.listWrap}>
        {filteredPostList.map((item) => {
          return <PostItem {...item} />
        })}
      </ul>}
    </div>
  )
}