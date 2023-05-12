import React from "react";
import styles from "./basket.module.scss";

type CommentProps = {};

const Comment: React.FC<CommentProps> = () => {
  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <div className={styles.posNum}>3</div>
        <p>Ваші коментарі</p>
      </div>
      <textarea name="comment" id=""></textarea>
    </div>
  );
};

export default Comment;
