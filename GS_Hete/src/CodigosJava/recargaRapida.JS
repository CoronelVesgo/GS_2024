const veiculos = [
    { id: 1, name: "Vovó Turbo", modelo: "Tesla", carga: 0 },
];

const tempoPorPorcentagem = 1; // Segundos necessários para carregar 1%

// Seleciona o contêiner onde os veículos serão exibidos
const exibirVeiculos = document.getElementById("exibirVeiculos");

function createVehicleElement(veiculo) {
    const veiculoDiv = document.createElement("div");
    veiculoDiv.className = "veiculo";

    const name = document.createElement("div");
    name.textContent = veiculo.name;
    name.style.fontWeight = "bold";

    const modelo = document.createElement("div");
    modelo.textContent = `Modelo: ${veiculo.modelo}`;
    modelo.style.color = "#555";

    const progressBarContainer = document.createElement("div");
    progressBarContainer.className = "progress-bar";

    const progressBar = document.createElement("div");
    progressBar.className = "progress";
    progressBar.style.width = `${veiculo.carga}%`;

    const progressText = document.createElement("div");
    progressText.className = "progress-text";
    progressText.textContent = `${veiculo.carga}%`;

    const timeRemaining = document.createElement("div");
    timeRemaining.className = "time-remaining";
    timeRemaining.textContent = calculateTimeRemaining(veiculo.carga);

    progressBarContainer.appendChild(progressBar);
    veiculoDiv.appendChild(name); //  Adiciona o nome na interface
    veiculoDiv.appendChild(modelo); // Adiciona o modelo na interface
    veiculoDiv.appendChild(progressBarContainer); // Adiciona a barra de progresso na interface
    veiculoDiv.appendChild(progressText); // Adiciona o texto de progresso na interface
    veiculoDiv.appendChild(timeRemaining); // Adiciona o tempo restante na interface

    return { element: veiculoDiv, progressBar, progressText, timeRemaining };
}

// Função para calcular o tempo restante
function calculateTimeRemaining(cargaAtual) {
    if (cargaAtual >= 100) return "Carga completa!";
    const porcentagemRestante = 100 - cargaAtual;
    const tempoRestante = porcentagemRestante * tempoPorPorcentagem;
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    return `Tempo restante: ${minutos}m ${segundos}s`;
}

// Inicializa a interface com os veículos
const vehicleElements = veiculos.map(veiculo => {
    const { element, progressBar, progressText, timeRemaining } = createVehicleElement(veiculo);
    exibirVeiculos.appendChild(element);
    return { progressBar, progressText, timeRemaining, veiculo };
});

// Função para atualizar a carga dos veículos
function updateVehicleCharge() {
    vehicleElements.forEach(({ progressBar, progressText, timeRemaining, veiculo }) => {
        if (veiculo.carga < 100) {
            veiculo.carga += 1; // Simula o carregamento
            progressBar.style.width = `${veiculo.carga}%`; // Atualiza a barra de progresso
            progressText.textContent = `${veiculo.carga}%`; // Atualiza o texto de porcentagem
            timeRemaining.textContent = calculateTimeRemaining(veiculo.carga); // Atualiza o tempo restante
        } else {
            timeRemaining.textContent = "Carga completa!";
        }
    });
}

// Atualiza os status a cada 1 segundo
setInterval(updateVehicleCharge, 1000);