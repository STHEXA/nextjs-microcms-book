import styles from "./index.module.css";

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="lastname">
            姓
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className={styles.textfield}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="firstname">
            名
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className={styles.textfield}
          />
        </div>
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="company">
          会社名
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className={styles.textfield}
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className={styles.textfield}
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          メッセージ
        </label>
        <textarea id="message" name="message" className={styles.textarea} />
      </div>
      <div className={styles.actions}>
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}
