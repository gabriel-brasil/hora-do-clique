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