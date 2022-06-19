const container = document.getElementById("container");
const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const day = date.getDate();
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const eventTitle = document.getElementById("eventTitle");
const dayTitle = document.getElementById("dayTitle");
const calendar = document.createElement("div");
calendar.setAttribute("id", "calendar");
let clicked = null;
const arr = [];

const eventArr = localStorage.setItem("events", arr);

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const firstDayOfMonth = new Date(year, month, 1);

const daysInMonth = new Date(year, month + 1, 0).getDate();

const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

for (let i = 1; i <= paddingDays + daysInMonth; i++) {
  const daySquare = document.createElement("div");
  daySquare.setAttribute("class", "daySquare");

  const dayString = `${month + 1}/${i - paddingDays}/${year}`;

  if (i > paddingDays) {
    daySquare.innerText = i - paddingDays;
    if (dayString === "6/15/2022") {
      const obj = {
        eventdate: dayString,
        currentEvent: "",
      };
      const x = "National Salvation Day";
      obj.currentEvent = x;
      daySquare.addEventListener("click", () => checkEvent(x));
      const dot = document.createElement("div");
      dot.setAttribute("class", "dot");
      arr.push(obj);
      daySquare.appendChild(dot);
    } else if (dayString === "6/26/2022") {
      const obj = {
        eventdate: dayString,
        currentEvent: "",
      };
      const x = "Armed Forces Day";
      obj.currentEvent = x;
      daySquare.addEventListener("click", () => checkEvent(x));
      const dot = document.createElement("div");
      dot.setAttribute("class", "dot");
      arr.push(obj);
      daySquare.appendChild(dot);
    } else {
      const obj = {
        eventdate: dayString,
        currentEvent: "",
      };
      const x = "";
      obj.currentEvent = x;
      daySquare.addEventListener("click", () => checkEvent(x));
      arr.push(obj);
    }

    if (i - paddingDays === day) {
      daySquare.id = "currentDay";
    }
  } else {
    daySquare.classList.add("padding");
  }

  calendar.appendChild(daySquare);
}

function checkEvent(x) {
  modal.style.display = "block";
  if (x === "") {
    console.log("empty");
    dayTitle.innerText = dateString;
    eventTitle.innerText = "No event for today";
  } else {
    console.log(x);
    dayTitle.innerText = dateString;
    eventTitle.innerText = x;
  }
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthName = document.createTextNode(months[month]);
const yearTxt = document.createTextNode(date.getFullYear());
const monthPlaceHolder = document.createElement("div");
const leftArrow = document.createElement("i");
leftArrow.setAttribute("class", "fa-solid fa-angles-left");
const rightArrow = document.createElement("i");
rightArrow.setAttribute("class", "fa-solid fa-angles-right");
monthPlaceHolder.appendChild(leftArrow);
monthPlaceHolder.appendChild(monthName);
monthPlaceHolder.appendChild(document.createTextNode(" "));
monthPlaceHolder.appendChild(yearTxt);
monthPlaceHolder.appendChild(rightArrow);
monthPlaceHolder.setAttribute("id", "monthPlaceHolder");
container.appendChild(monthPlaceHolder);
const calPlaceholder = document.createElement("div");
calPlaceholder.setAttribute("id", "calPlaceholder");
container.appendChild(calPlaceholder);
const weekPlaceholder = document.createElement("div");
weekPlaceholder.setAttribute("id", "weekPlaceholder");
weekdays.forEach((day) => {
  const wday = document.createElement("div");
  wday.setAttribute("id", "wday");
  wday.innerText = day;
  weekPlaceholder.appendChild(wday);
});
calPlaceholder.appendChild(weekPlaceholder);
calPlaceholder.appendChild(calendar);

console.log(arr);
