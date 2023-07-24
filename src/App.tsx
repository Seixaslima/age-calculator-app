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
  //error check
  const [dayError, setDayError] = useState("")
  const [monthError, setMonthError] = useState("")
  const [yearError, setYearError] = useState("")

  function checkForm() {
    let someError = false
    const data = new Date()


    if (day === "") {
      setDayError("This fild is required");
      someError = true;
    } else if (Number(day) > 31 || Number(day) < 1) {
      setDayError("Most be a valid day");
      someError = true;
    } else setDayError("")

    if (month === "") {
      setMonthError("This fild is required");
      someError = true;
    } else if (Number(month) < 1 || Number(month) > 12) {
      setMonthError("Most be a valid month");
      someError = true;
    } else setMonthError("")

    if (year === "") {
      setYearError("This fild is required");
      someError = true;
    } else if (Number(year) > data.getFullYear()) {
      setYearError("Most be in the past");
      someError = true;
    } else setYearError("")

    if (someError) return false

    const testDate = new Date(Number(year), Number(month) - 1, Number(day))
    if (Number(month) !== (testDate.getMonth() + 1)) {
      setDayError("Most be a valid date");
      someError = true
    }

    return !someError
  }

  function calculateAge() {
    if (!checkForm()) return

    const today = new Date();
    const todayYear = today.getFullYear()
    const todayMonth = today.getMonth() + 1
    const todayDay = today.getDate()



    const yearNumber = Number(year)
    const monthNumber = Number(month)
    const dayNumber = Number(day)


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
        <Forms
          {...{ day, setDay, month, setMonth, year, setYear, dayError, monthError, yearError }}
          checkForm={calculateAge}
        />
        <div className={styles.barra} />
        <Result day={calculatedDay} month={calculatedMonth} year={calculatedYear} />
      </div>
    </main>
  )
}
