class Agent {
  constructor(id) {
    this.id = id;
    this.money = Math.floor(Math.random() * 100) + 50; // 50-150
    this.goods = Math.floor(Math.random() * 10);
    this.rawMaterials = Math.floor(Math.random() * 5); // initial materials
    this.gatherRate = Math.ceil(Math.random() * 2); // 1-2 materials per tick
    this.productionRate = Math.ceil(Math.random() * 2); // 1-2 goods per tick
    this.price = Math.floor(Math.random() * 10) + 5; // 5-14 money per good
  }

  gather() {
    this.rawMaterials += this.gatherRate;
  }

  produce() {
    const producible = Math.min(this.productionRate, this.rawMaterials);
    this.goods += producible;
    this.rawMaterials -= producible;
  }

  attemptTrade(partner) {
    if (this.goods <= 0 || partner.money < this.price) return;
    this.goods -= 1;
    this.money += this.price;
    partner.goods += 1;
    partner.money -= this.price;
  }
}

const agents = [];
const AGENT_COUNT = 10;
for (let i = 0; i < AGENT_COUNT; i++) {
  agents.push(new Agent(i));
}

let timer = null;

function updateAgents() {
  for (const agent of agents) {
    agent.gather();
    agent.produce();
    const partner = agents[Math.floor(Math.random() * agents.length)];
    if (partner !== agent) {
      agent.attemptTrade(partner);
    }
  }
  render();
}

function render() {
  const tbody = document.querySelector('#agentTable tbody');
  tbody.innerHTML = '';
  for (const agent of agents) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${agent.id}</td><td>${agent.money}</td><td>${agent.rawMaterials}</td><td>${agent.goods}</td>`;
    tbody.appendChild(tr);
  }
}

document.getElementById('startBtn').onclick = function() {
  if (!timer) {
    timer = setInterval(updateAgents, 1000);
  }
};

document.getElementById('stopBtn').onclick = function() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

render();
