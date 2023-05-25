import React from "react";
import styles from "./basket.module.scss";
import { useAppDispatch } from "../../redux/hook";
import { setValueComent } from "../../redux/slices/basketSlice";

type CommentProps = {};

const Comment: React.FC<CommentProps> = () => {
  const dispatch = useAppDispatch();
  const [coment, setComent] = React.useState<string>("");

  const updateSearchValue = React.useCallback((str: string): void => {
    dispatch(setValueComent(str));
  }, []);

  const handleChangeComent = (
    event: React.ChangeEventHandler<HTMLTextAreaElement>
  ) => {
    //@ts-ignore
    setComent(event.target.value);
    //@ts-ignore
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <div className={styles.posNum}>3</div>
        <p>Ваші коментарі</p>
      </div>
      <textarea
        name="comment"
        //@ts-ignore
        onChange={handleChangeComent}
        value={coment}
        id=""
      ></textarea>
    </div>
  );
};

export default Comment;
