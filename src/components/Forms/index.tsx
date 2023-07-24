import Campo from 'components/Campo'
import styles from './Form.module.css'
import { ReactComponent as Arrow } from './iconArrow.svg'

interface IForms {
  day: string,
  month: string,
  year: string,
  dayError: string,
  monthError: string,
  yearError: string,
  setDay: React.Dispatch<React.SetStateAction<string>>
  setMonth: React.Dispatch<React.SetStateAction<string>>
  setYear: React.Dispatch<React.SetStateAction<string>>
  checkForm: () => void
}

export default function Forms(props: IForms) {
  const { day, setDay, month, setMonth, year, setYear, checkForm, dayError, monthError, yearError } = props
  return (
    <form
      className={styles.forms}
      onSubmit={e => {
        e.preventDefault()
        checkForm()
      }}
      onInvalid={e => {
        e.preventDefault()
        checkForm()
      }}
    >
      <div className={styles.campos}>
        <Campo label="day" placeholder="dd" valor={day} setValor={setDay} error={dayError} />
        <Campo label="month" placeholder="mm" valor={month} setValor={setMonth} error={monthError} />
        <Campo label="year" placeholder="yyyy" valor={year} setValor={setYear} error={yearError} />
      </div>
      <button aria-label='submit' type="submit" className={styles.submit} >
        <Arrow />
      </button>
    </form>
  )
}