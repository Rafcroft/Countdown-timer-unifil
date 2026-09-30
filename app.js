const input = document.getElementById("date-input")
const output = document.getElementById("output")

const one_seconds = 1000
const one_minute = one_seconds * 60
const one_hour = one_minute * 60
const one_day = one_hour * 24
const one_mouth = one_day * 30
const one_year = one_mouth * 12

function calculareRemainingTime(date_reference, date_today) {
    let time_left = date_reference - date_today

    let year_left = 0
    while (time_left > one_year) {
        year_left++
        time_left = time_left - one_year
    }

    let mouth_left = 0
    while (time_left > one_mouth) {
        mouth_left++
        time_left = time_left - one_mouth
    }

    let day_left = 0
    while (time_left > one_day) {
        day_left++
        time_left = time_left - one_day
    }

    let hour_left = 0
    while (time_left > one_hour) {
        hour_left++
        time_left = time_left - one_hour
    }

    let minute_left = 0
    while (time_left > one_minute) {
        minute_left++
        time_left = time_left - one_minute
    }

    let seconds_left = 0
    while (time_left > one_seconds) {
        seconds_left++
        time_left = time_left - one_seconds
    }

    return {
        year_left,
        mouth_left,
        day_left,
        hour_left,
        minute_left,
        seconds_left
    }
}

function text_builder(remaining_time) {
    let result = []

    if (remaining_time.year_left > 0) {
        result.push(`${remaining_time.year_left > 1 ? "years" : "year"}`)
    }

    if (remaining_time.mouth_left > 0) {
        result.push(`${remaining_time.mouth_left > 1 ? "mouths" : "mouth"}`)
    }

    if (remaining_time.day_left > 0) {
        result.push(`${remaining_time.day_left > 1 ? "days" : "day"}`)
    }

    if (remaining_time.hour_left > 0) {
        result.push(`${remaining_time.hour_left > 1 ? "hours" : "hour"}`)
    }

    if (remaining_time.minute_left > 0) {
        result.push(`${remaining_time.minute_left > 1 ? "minutes" : "minute"}`)
    }

    if (remaining_time.seconds_left > 0) {
        result.push(`${remaining_time.seconds_left > 1 ? "seconds" : "second"}`)
    }

}

const data_referencia = new Date("2026", "10", "01")
const data_atual = new Date()

let resultado = calculareRemainingTime(data_referencia, data_atual)
console.log(resultado)
