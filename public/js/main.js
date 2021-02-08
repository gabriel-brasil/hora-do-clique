const btn = document.querySelector('#btn')
const time = document.querySelector('#time')

const today = new Date()

// criaro objeto de horários
const days = {
  segunda: {
    entrada: 0,
    saidaAlmoco: 0,
    voltaAlmoco: 0,
    saida: 0
  },
}

// adicionar ao storage o objeto de horários
if (!localStorage.getItem("hdc_Days")) {
  localStorage.setItem("hdc_Days", JSON.stringify(days))
}

// prencher o html com os campos salvos
function fillFields() {
  let currentStorage = JSON.parse(localStorage.getItem("hdc_Days"))
  time.textContent = ''
  time.append(currentStorage.segunda.entrada)
}

// salvar o horário no local storage
function addTime() {
  const today = new Date()
  let hour = today.getHours()
  let minute = today.getMinutes()

  if (hour < 10) { hour = '0' + hour }
  if (minute < 10) { minute = '0' + minute }

  const finalTime = hour + ":" + minute

  let currentStorage = JSON.parse(localStorage.getItem("hdc_Days"))

  currentStorage.segunda.entrada = finalTime
  localStorage.setItem("hdc_Days", JSON.stringify(currentStorage))

  fillFields()
}
