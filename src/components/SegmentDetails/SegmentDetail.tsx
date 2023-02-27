import styles from "./SegmentDetail.module.css";

export default function SegmentDetail() {
  return (
    <article className={styles.segment_detail}>
      <div className="h-52 bg-purple-400">Main Photo</div>
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div className="bg-green-400">
          <h3>Title</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non fugiat
            commodi sit iusto, minima deleniti sunt sed quisquam quo illum magni
            animi error laborum ut quod quaerat nesciunt ex reprehenderit libero
            officiis modi, suscipit ipsa.
          </p>
        </div>
        <div className="h-56 bg-red-400">Map Preview</div>
      </div>
    </article>
  );
}
