const navigation = [
  {
    name: "Anasayfa",
  },
  {
    name: "Akış",
  },
  {
    name: "Keşfet",
  },
  {
    name: "Makaleler",
  },
  {
    name: "Soru & Cevab",
  },
];
const navigationTwo = [
  {
    name: "Javascript",
  },
  {
    name: "Html",
  },
  {
    name: "Css",
  },
  {
    name: "Python",
  },
  {
    name: "Laravel",
  },
  {
    name: "Php",
  },
  {
    name: "MySQL",
  },
  {
    name: "Git",
  },
];

const navDiv = document.createElement("div"); // div elementi oluşturuldu.
navDiv.classList = "mb-10";
navigation.forEach((item) => {
  const navA = document.createElement("a");
  navA.textContent = item.name;
  navA.href = "#";
  navA.classList =
    "flex items-center h-10 rounded px-3 text-xl text-logo font-bold hover:bg-gray-100 transition-colors dark:text-white dark:hover:!bg-gray-800";
  navDiv.appendChild(navA);
});

const navDivTwo = document.createElement("div"); // div elementi oluşturuldu.
navigationTwo.forEach((item) => {
  const navA = document.createElement("a");
  navA.textContent = item.name;
  navA.href = "#";
  navA.classList =
    "flex items-center h-10 rounded px-3 text-xl text-logo font-bold hover:bg-gray-100 transition-colors dark:text-white dark:hover:!bg-gray-800";
  navDiv.appendChild(navA);
});
const nav = document.getElementById("nav");
nav.appendChild(navDiv);

const navTwo = document.getElementById("navTwo");
navTwo.appendChild(navDivTwo);

function darkMode() {
  document.documentElement.classList.toggle("dark");
}
