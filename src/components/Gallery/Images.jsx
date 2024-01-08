import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import styles from "./gallery.module.css";

export default function Images() {
  return (
    <>
      <div className={styles.images}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </>
  );
}
