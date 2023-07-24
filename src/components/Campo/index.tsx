import styles from './Campo.module.css'

interface ICampo {
  label: string,
  placeholder: string,
  valor: string,
  error?: string
  setValor: React.Dispatch<React.SetStateAction<string>>
}

export default function Campo({ label, placeholder, valor, setValor, error = "" }: ICampo) {

  return (
    <div className={styles.campo}>
      <label htmlFor=""> {label} </label>
      <input type='number' placeholder={placeholder} required={true} value={valor} onChange={e => setValor(e.target.value)} />
      <p className={styles.erro}> {error} </p>

    </div>
  )
}