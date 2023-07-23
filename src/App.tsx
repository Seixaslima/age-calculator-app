import Forms from "./components/Forms";
import styles from './App.module.css'
import Result from "components/Result";
import { useState } from "react";


export default function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [calculatedDay, setCalculatedDay] = useState("");
  const [calculatedMonth, setCalculatedMonth] = useState("");
  const [calculatedYear, setCalculatedYear] = useState("");

  function calculateAge() {
    const today = new Date();
    const todayYear = today.getFullYear()
    const todayMonth = today.getMonth() + 1
    const todayDay = today.getDate()

    console.log(`${todayDay}/${todayMonth}/${todayYear}`);


    const yearNumber = Number(year)
    const monthNumber = Number(month)
    const dayNumber = Number(day)

    console.log(`${dayNumber}/${monthNumber}/${yearNumber}`);

    let yearAge = todayYear - yearNumber

    if (dayNumber === todayDay) {
      setCalculatedDay("0")

      if (todayMonth < monthNumber) {
        setCalculatedYear((yearAge - 1).toFixed(0))
        setCalculatedMonth((12 - (monthNumber - todayMonth)).toFixed(0))
      } else if (todayMonth === monthNumber) {
        setCalculatedMonth("0")
        setCalculatedYear(yearAge.toFixed(0))
      } else {
        setCalculatedMonth((todayMonth - monthNumber).toFixed(0))
        setCalculatedYear(yearAge.toFixed(0))
      }
    } else if (dayNumber < todayDay) {
      setCalculatedDay((30 - (todayDay - dayNumber)).toFixed(0))

      if (todayMonth < monthNumber) {
        setCalculatedYear((yearAge - 1).toFixed(0))
        setCalculatedMonth((12 - (monthNumber - todayMonth) - 1).toFixed(0))
      } else if (todayMonth === monthNumber) {
        setCalculatedMonth("0")
        setCalculatedYear((yearAge - 1).toFixed(0))
      } else {
        setCalculatedMonth((todayMonth - monthNumber - 1).toFixed(0))
        setCalculatedYear(yearAge.toFixed(0))
      }
    } else {
      setCalculatedDay((dayNumber - todayDay).toFixed(0))

      if (todayMonth < monthNumber) {
        setCalculatedYear((yearAge - 1).toFixed(0))
        setCalculatedMonth((12 - (monthNumber - todayMonth)).toFixed(0))
      } else if (todayMonth === monthNumber) {
        setCalculatedMonth("0")
        setCalculatedYear((yearAge).toFixed(0))
      } else {
        setCalculatedMonth((todayMonth - monthNumber).toFixed(0))
        setCalculatedYear(yearAge.toFixed(0))
      }

    }
  }

  return (
    <main>
      <div className={styles.card}>
        <Forms {...{ day, setDay, month, setMonth, year, setYear }} onSubmited={calculateAge} />
        <div className={styles.barra} />
        <Result day={calculatedDay} month={calculatedMonth} year={calculatedYear} />
      </div>
    </main>
  )
}
