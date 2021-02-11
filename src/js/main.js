// create variable
const storageDays = {
  segunda: {
    dia: '--/--',
    entrada1: '--:--',
    saida1: '--:--',
    entrada2: '--:--',
    saida2: '--:--',
    entrada3: '--:--',
    saida3: '--:--'
  },
  terca: {
    dia: '--/--',
    entrada1: '--:--',
    saida1: '--:--',
    entrada2: '--:--',
    saida2: '--:--',
    entrada3: '--:--',
    saida3: '--:--'
  },
  quarta: {
    dia: '--/--',
    entrada1: '--:--',
    saida1: '--:--',
    entrada2: '--:--',
    saida2: '--:--',
    entrada3: '--:--',
    saida3: '--:--'
  },
  quinta: {
    dia: '--/--',
    entrada1: '--:--',
    saida1: '--:--',
    entrada2: '--:--',
    saida2: '--:--',
    entrada3: '--:--',
    saida3: '--:--'
  },
  sexta: {
    dia: '--/--',
    entrada1: '--:--',
    saida1: '--:--',
    entrada2: '--:--',
    saida2: '--:--',
    entrada3: '--:--',
    saida3: '--:--'
  },
}
if (!localStorage.getItem("hdc_Days")) {
  localStorage.setItem("hdc_Days", JSON.stringify(storageDays))
}

// update days
function updateDay() {
  const newDate = new Date()
  let currentStorageDays = JSON.parse(localStorage.getItem("hdc_Days"))
  let i = 0

  for (const el in currentStorageDays) {
    newDate.setDate(newDate.getDate() - newDate.getDay() + 1 + i)
    currentStorageDays[el].dia = `${newDate.getDate()}/${newDate.getMonth() + 1}`
    i++
  }

  localStorage.setItem("hdc_Days", JSON.stringify(currentStorageDays))
}
updateDay()

// render html
function render() {
  const currentStorageVar1 = JSON.parse(localStorage.getItem("hdc_Days"))

  const $tela = document.querySelector('.container-days')
  $tela.innerHTML = ''


  for (const day in currentStorageVar1) {

    $tela.innerHTML += `
      <section class="content" data-name="${day}"></section>
    `;

    const dayContainer = document.querySelector(`.content[data-name="${day}"]`);

    for (const io in currentStorageVar1[day]) {
      const el = currentStorageVar1[day][io]
      if (io === 'dia') {
        dayContainer.innerHTML += `
        <div class="info">
          <h1>${day}</h1>
          <h2 data-type="day">${el}</h2>
        </div>
      `
      } else {
        dayContainer.innerHTML += `
        <div class="time-container" data-type="${io}">
          <button class="add-btn" type="button"></button>
          <span class="time-visor" data-type="time">${el}</span>
        </div>
      `
      }
    }
  }

  const btnAddTime = document.querySelectorAll('.add-btn')
  btnAddTime.forEach(el => {
    el.addEventListener('click', (event) => {
      const newDate = new Date()
      const currentStorageVar = JSON.parse(localStorage.getItem("hdc_Days"))

      const dataTypeName = event.target.parentNode.parentNode.dataset.name
      const dataTypeIO = event.target.parentNode.dataset.type

      let hour = newDate.getHours()
      let minute = newDate.getMinutes()

      if (hour < 10) { hour = '0' + hour }
      if (minute < 10) { minute = '0' + minute }

      const finalTime = hour + ":" + minute

      for (const dia in currentStorageVar) {
        if (dia === dataTypeName) {
          for (const io in currentStorageVar[dia]) {
            if (io === dataTypeIO) {
              currentStorageVar[dia][io] = finalTime
            }
          }
        }
      }

      localStorage.setItem("hdc_Days", JSON.stringify(currentStorageVar))
      render()

    })
  })
}
render()
