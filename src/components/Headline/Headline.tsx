import styles from "./Headline.module.css"

interface HeadlineProps {
  headline: string;
}

export default function Text({headline}: HeadlineProps) {
  return <h2 className={`background ${styles.text}`}>{headline}</h2>;
}
