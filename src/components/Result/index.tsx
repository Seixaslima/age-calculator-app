import styles from './Result.module.css'

interface IResult {
  day: string,
  month: string,
  year: string
}

export default function Result({ day, month, year }: IResult) {
  return (
    <div className={styles.result} >
      <p className={styles.text}> <span> {year !== "" ? year : "--"}</span> years</p>
      <p className={styles.text}> <span> {month !== "" ? month : "--"}</span> months</p>
      <p className={styles.text}> <span> {day !== "" ? day : "--"}</span> days</p>
    </div>
  )
}