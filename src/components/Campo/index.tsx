import styles from './Campo.module.css'

interface ICampo {
  label: string,
  placeholder: string,
  valor: string,
  setValor: React.Dispatch<React.SetStateAction<string>>
}

export default function Campo({ label, placeholder, valor, setValor }: ICampo) {
  return (
    <div className={styles.campo}>
      <label htmlFor=""> {label} </label>
      <input placeholder={placeholder} required={true} value={valor} onChange={e => setValor(e.target.value)} />

    </div>
  )
}