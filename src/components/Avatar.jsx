import styles from "./Avatar.module.css";

function Avatar({ name }) {
  return (
    <div className={styles.avatar}>
      <p>{name[0]}</p>
    </div>
  );
}

export default Avatar;
