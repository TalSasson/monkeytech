export default (timeString) => {
    const hours = new Date(timeString).getHours().toString()
    const minutes = new Date(timeString).getMinutes().toString()
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`
}