const cultures = {
CIDN: {
    nom: "Région des Lagunes",
    culture: "Cacao, café, hévéa",
    photo: "images/cacao.png"
  },
CIZZ: {
    nom: "Haut-Sassandra",
    culture: "Coton, maïs, riz",
    photo: "images/riz.png"
  }
};

function afficherInfo(Id) {
  const zone = document.getElementById("info");
  const data = cultures[Id];
  if (data) {
    zone.innerHTML = `
      <h3>${data.nom}</h3>
      <img src="${data.photo}" alt="${data.culture}" width="120">
      <p>Principales cultures : ${data.culture}</p>
    `;
    zone.classList.add("active");
  }
}

document.querySelectorAll("SVG PATH").forEach(path => {
  path.addEventListener("click", () => {
    afficherInfo(path.id);
  });
});