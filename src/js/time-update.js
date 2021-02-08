const updateButton = document.querySelector('#update-time')
const dataTypeDay = document.querySelectorAll('.content .info [data-type="day"]')


function updateTime() {
  const newDate = new Date()
  let currentStorageDays = JSON.parse(localStorage.getItem("hdc_Days"))
  let i = 0

  for (const el in currentStorageDays) {
    newDate.setDate(newDate.getDate() - newDate.getDay() + 1 + i)
    currentStorageDays[el].dia = `${newDate.getDate()}/${newDate.getMonth() + 1}`
    i++
  }
  
  localStorage.setItem("hdc_Days", JSON.stringify(currentStorageDays))
  printDate()
}

function printDate() {
  let currentStorageDays = JSON.parse(localStorage.getItem("hdc_Days"))
  let i = 0
  for (const el in currentStorageDays) {
    dataTypeDay[i].textContent = currentStorageDays[el].dia
    i++
  }
}

updateButton.addEventListener('click', () => {
  updateTime()
})