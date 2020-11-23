const storageDays = {
  segunda: {
    dia: '--/--',
    entrada: '--:--',
    saidaAlmoco: '--:--',
    voltaAlmoco: '--:--',
    saida: '--:--'
  },
  terca: {
    dia: '--/--',
    entrada: '--:--',
    saidaAlmoco: '--:--',
    voltaAlmoco: '--:--',
    saida: '--:--'
  },
  quarta: {
    dia: '--/--',
    entrada: '--:--',
    saidaAlmoco: '--:--',
    voltaAlmoco: '--:--',
    saida: '--:--'
  },
  quinta: {
    dia: '--/--',
    entrada: '--:--',
    saidaAlmoco: '--:--',
    voltaAlmoco: '--:--',
    saida: '--:--'
  },
  sexta: {
    dia: '--/--',
    entrada: '--:--',
    saidaAlmoco: '--:--',
    voltaAlmoco: '--:--',
    saida: '--:--'
  },
}

if (!localStorage.getItem("Dias")) {
  localStorage.setItem("Dias", JSON.stringify(storageDays))
}