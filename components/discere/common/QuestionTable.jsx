import { isQuestionTable } from '@/lib/discere/question-table'
import styles from './QuestionTable.module.css'

export default function QuestionTable({ table }) {
  if (!isQuestionTable(table)) return <p role="alert">Tablicu nije moguće prikazati: podatci nisu valjani.</p>
  return <div className={styles.scroll} role="region" aria-label={`Tablica: ${table.caption}`} tabIndex={0}>
    <table className={styles.table}>
      <caption>{table.caption}</caption>
      <thead><tr>{table.columns.map((column, index) => <th key={index} scope="col">{column}</th>)}</tr></thead>
      <tbody>{table.rows.map((row, index) => <tr key={index}>
        {row.map((cell, column) => column === 0 ? <th key={column} scope="row">{cell}</th> : <td key={column}>{cell}</td>)}
      </tr>)}</tbody>
    </table>
  </div>
}
