import styles from '../styles/button.module.css';

const Button = (props: any): JSX.Element => {
  return (
    <div onClick={() => ''} className={styles.button}>
      {props.children}
    </div>
  );
};

export default Button;
