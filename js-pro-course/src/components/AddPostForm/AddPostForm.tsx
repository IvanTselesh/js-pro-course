import {ChangeEventHandler, useState} from "react";

import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Container } from "../Container/Container";
import styles from "./styles.module.css";
import {createPost} from "../../api/posts";
import {useNavigate} from "react-router-dom";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const removeImage = () => {
    setImage('');
    setFile(null)
  };

  const createNewPost = () => {
    setIsLoading(true);
    const formData = new FormData();
    if(file) {
      formData.append('image', image);
    };
    formData.append('text', text);
    formData.append('lesson_num', number);
    formData.append('title', title);

    createPost(formData).then((response) => {
      if(response.ok) {
        navigate('/my-posts')
      };
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const fileReader = new FileReader();
    const files = event.target.files;

    if(files?.length) {
      fileReader.readAsDataURL(files[0]);
      setFile(files[0]);

      fileReader.onload = (event: ProgressEvent<FileReader>) => {
        if(typeof event.target?.result === 'string') {
          setImage(event.target?.result);
        };
      };
    };
  };

  return (
    <>
      <div className={styles.addPostIndex}>
        <Container>
          <div className={styles.addPostWrraper}>
            <Title text="Add new post" />
            <div className={styles.addPost}>
              <div className={styles.addText}>
                <Input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Lesson number"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                />
                <Input
                  value={text}
                  placeholder="Text"
                  onChange={(event) => setText(event.target.value)}
                />
              </div>
              <div className={styles.addImg}>
                {image ? (
                  <>
                    <img src={image} />
                    <Button
                      text="remove image"
                      onClick={removeImage}
                      styleBtn='button'
                      disabled={false}
                    />
                  </>
                ) : (
                  <p className={styles.addName}>Image</p>
                )}

                <div className={styles.addBtn}>
                  {image ? null : (
                    <>
                      <div style={{ position: "absolute" }}>
                        <Button
                          styleBtn='button'
                          disabled={false}
                          text="Add"
                          onClick={() => {}}
                        ></Button>
                        <input type='file' className={styles.input} accept="image/*" onChange={handleOnChange}/>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.addManeBtn}>
              <Button
                styleBtn='button'
                disabled={false}
                text="Add"
                onClick={createNewPost}
              ></Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};