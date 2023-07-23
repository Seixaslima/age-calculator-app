import Campo from 'components/Campo'
import styles from './Form.module.css'
import { ReactComponent as Arrow } from './iconArrow.svg'

interface IForms {
  day: string,
  month: string,
  year: string,
  setDay: React.Dispatch<React.SetStateAction<string>>
  setMonth: React.Dispatch<React.SetStateAction<string>>
  setYear: React.Dispatch<React.SetStateAction<string>>
  onSubmited: () => void
}

export default function Forms(props: IForms) {
  const { day, setDay, month, setMonth, year, setYear, onSubmited } = props
  return (
    <form className={styles.forms} onSubmit={e => {
      e.preventDefault()
      onSubmited()
    }}>
      <div className={styles.campos}>
        <Campo label="day" placeholder="dd" valor={day} setValor={setDay} />
        <Campo label="month" placeholder="mm" valor={month} setValor={setMonth} />
        <Campo label="year" placeholder="yyyy" valor={year} setValor={setYear} />
      </div>
      <button aria-label='submit' type="submit" className={styles.submit} >
        <Arrow />
      </button>
    </form>
  )
}