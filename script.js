    function atualizarTempo() {
      const dataCasamento = new Date('2021-10-02T00:00:00'); // Altere aqui a data do casamento
      const agora = new Date();
      const diferencaMs = agora - dataCasamento;

      const segundos = Math.floor(diferencaMs / 1000);
      const minutos = Math.floor(segundos / 60);
      const horas = Math.floor(minutos / 60);
      const dias = Math.floor(horas / 24);

      const restoHoras = horas % 24;
      const restoMinutos = minutos % 60;
      const restoSegundos = segundos % 60;

      document.getElementById('timer').textContent = 
        `${dias} dias, ${restoHoras} horas, ${restoMinutos} minutos, ${restoSegundos} segundos`;
    }

    setInterval(atualizarTempo, 1000);
    atualizarTempo(); // Chama imediatamente ao carregar
