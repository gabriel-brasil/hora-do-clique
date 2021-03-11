// create variable
const storageDays = {
  days: {
    segunda: {
      dia: "--/--",
      entrada1: "--:--",
      saida1: "--:--",
      entrada2: "--:--",
      saida2: "--:--",
      entrada3: "--:--",
      saida3: "--:--",
    },
    terca: {
      dia: "--/--",
      entrada1: "--:--",
      saida1: "--:--",
      entrada2: "--:--",
      saida2: "--:--",
      entrada3: "--:--",
      saida3: "--:--",
    },
    quarta: {
      dia: "--/--",
      entrada1: "--:--",
      saida1: "--:--",
      entrada2: "--:--",
      saida2: "--:--",
      entrada3: "--:--",
      saida3: "--:--",
    },
    quinta: {
      dia: "--/--",
      entrada1: "--:--",
      saida1: "--:--",
      entrada2: "--:--",
      saida2: "--:--",
      entrada3: "--:--",
      saida3: "--:--",
    },
    sexta: {
      dia: "--/--",
      entrada1: "--:--",
      saida1: "--:--",
      entrada2: "--:--",
      saida2: "--:--",
      entrada3: "--:--",
      saida3: "--:--",
    },
  },
  version: "_0.1v",
};
if (!localStorage.getItem("hdc_Days")) {
  localStorage.setItem("hdc_Days", JSON.stringify(storageDays));
}

// components
const _ContainerDay = function (day) {
  return `
    <section class="content" data-name="${day}"></section> 
  `;
};

const _DayInfo = function (day, el) {
  return `
    <div class="info">
      <h1>${day}</h1>
      <h2 data-type="day">${el}</h2>
    </div>
  `;
};

const _Day = function (el, io) {
  let buttonActived = "_false";
  if (el != "--:--") {
    buttonActived = "_true";
  }

  return `
    <div class="time-container" data-type="${io}">
      <button class="add-btn" type="button" onclick="handleState(event)" data-active="${buttonActived}"></button>
      <span class="time-visor">${el}</span>
    </div>
  `;
};

// add/remove time
function handleState(event) {
  const newDate = new Date();
  const currentStorageVar = JSON.parse(localStorage.getItem("hdc_Days"));

  const dataTypeName = event.target.parentNode.parentNode.dataset.name;
  const dataTypeIO = event.target.parentNode.dataset.type;

  let hour = newDate.getHours();
  let minute = newDate.getMinutes();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  const finalTime = hour + ":" + minute;

  if (event.target.dataset.active === "_true") {
    _.set(currentStorageVar, `days.${dataTypeName}.${dataTypeIO}`, "--:--");
  } else if (event.target.dataset.active === "_false") {
    _.set(currentStorageVar, `days.${dataTypeName}.${dataTypeIO}`, finalTime);
  }

  const buttonClicked = event.target;
  const timeDisplay = event.target.parentElement.children[1];

  if (timeDisplay.textContent === "--:--") {
    buttonClicked.dataset.active = "_true";
    timeDisplay.textContent = finalTime;
  } else {
    buttonClicked.dataset.active = "_false";
    timeDisplay.textContent = "--:--";
  }

  localStorage.setItem("hdc_Days", JSON.stringify(currentStorageVar));
}

// render html
function render() {
  const currentStorageVar = JSON.parse(localStorage.getItem("hdc_Days"));
  const $tela = document.querySelector(".container-days");

  for (const day in currentStorageVar.days) {
    $tela.innerHTML += _ContainerDay(day);

    const containerDay = document.querySelector(`.content[data-name="${day}"]`);

    for (const io in currentStorageVar.days[day]) {
      const el = currentStorageVar.days[day][io];

      if (io === "dia") {
        containerDay.innerHTML += _DayInfo(day, el);
      } else {
        containerDay.innerHTML += _Day(el, io);
      }
    }
  }
}
render();
