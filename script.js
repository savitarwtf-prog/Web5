const userProfile = {
  name: "Aldiyar",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["Coding", "Chess", "Dombra"]
};

function updateProfileDisplay() {
  const currentYear = new Date().getFullYear();

  const age = currentYear - userProfile.birthYear;
  const ageInMonths = age * 12;

  document.getElementById("displayName").textContent = userProfile.name;
  document.getElementById("displayBirthYear").textContent = userProfile.birthYear;
  document.getElementById("displayIsDev").textContent = userProfile.isDeveloper ? "Yes" : "No";
  document.getElementById("displayAge").textContent = age;
  document.getElementById("displayMonths").textContent = ageInMonths;

  console.log("Updated userProfile:", userProfile);
  console.log("Calculated Age:", age, "Months Old:", ageInMonths);
}

function renderHobbies() {
  const hobbiesList = document.getElementById("hobbiesList");
  hobbiesList.innerHTML = "";

  userProfile.hobbies.forEach((hobby) => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
  });

  document.getElementById("hobbiesCount").textContent = userProfile.hobbies.length;
}

updateProfileDisplay();
renderHobbies();

const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const usernameInput = document.getElementById("usernameInput").value;
  const birthYearInput = document.getElementById("birthYearInput").value;

  if (usernameInput && birthYearInput) {
    userProfile.name = usernameInput;
    userProfile.birthYear = Number(birthYearInput); // Явное приведение типов (string -> number)

    updateProfileDisplay();

    document.getElementById("usernameInput").value = "";
    document.getElementById("birthYearInput").value = "";
  }
});

const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
const hobbyInput = document.getElementById("hobbyInput");
const hobbiesList = document.getElementById("hobbiesList");

addItemBtn.addEventListener("click", function () {
  const text = hobbyInput.value.trim();

  if (text !== "") {
    userProfile.hobbies.push(text);

    const li = document.createElement("li");
    li.textContent = text;
    hobbiesList.appendChild(li);

    document.getElementById("hobbiesCount").textContent = userProfile.hobbies.length;

    hobbyInput.value = "";
  }
});

removeItemBtn.addEventListener("click", function () {
  const lastItem = hobbiesList.lastElementChild;

  if (lastItem) {
    hobbiesList.removeChild(lastItem); 
    userProfile.hobbies.pop();          

    document.getElementById("hobbiesCount").textContent = userProfile.hobbies.length;
  } else {
    alert("No more items to remove!");
  }
});