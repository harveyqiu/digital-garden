import styles from "./UnderlineHoverLink.module.css"

export default function UnderlineHoverLink({ href, children }) {
  return (
    <div className="inline-block items-center justify-center relative left-3 top-1 ml-2">
      <a className={styles.styled_link} href={href}>
        <span>{children}</span>
      </a>
    </div>
  );
}
