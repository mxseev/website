import {FC} from "react"
import type {MDXComponents} from "mdx/types"

import Content from "./content.mdx"
import styles from "./page.module.css"

const mdxComponents: MDXComponents = {
  em: props => <em {...props} className={styles.accent} />,
  hr: props => <hr {...props} className={styles.line} />
}

export const metadata = {
  title: "Max Eliseev CV"
}

const CvPage: FC = () => (
  <div className={styles.container}>
    <Content components={mdxComponents} />
    <footer className={styles.footer}>
      <hr className={styles.line} />
      <a href="MaxEliseevCV.pdf" target="_blank" rel="noopener noreferrer" download>
        Download as .pdf
      </a>{" "}
      <span>(or just print this page to PDF)</span>
    </footer>
  </div>
)

export default CvPage
