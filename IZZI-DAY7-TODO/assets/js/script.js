const title = document.getElementById("title");
const priority = document.getElementById("priority");
const add = document.getElementById("add");
const tasklist = document.getElementById("tasklist");
const storageArr = [];

add.addEventListener("click", () => {
  const left = document.createElement("div");
  const right = document.createElement("div");
  const edit = document.createElement("i");
  const del = document.createElement("i");
  edit.setAttribute("class", "fa-solid fa-pen");
  del.setAttribute("class", "fa-solid fa-trash-can");
  left.style.width = "16em";
  const taskitem = document.createElement("div");
  taskitem.style.display = "flex";
  taskitem.style.justifyContent = "space-between";
  taskitem.style.wordBreak = "break-word";
  taskitem.style.width = "24em";
  taskitem.style.padding = "1em 2em";
  taskitem.style.margin = "1em";
  taskitem.style.borderRadius = "0.3em";
  taskitem.style.boxShadow = "0em 0em 0.4em lightgrey";
  const priorityText = document.createElement("span");
  priorityText.innerText = priority.value;
  taskitem.append(left);
  const titleText = document.createElement("h3");
  titleText.setAttribute("class", "titleText");
  titleText.innerText = title.value;
  left.append(titleText);
  left.append(document.createElement("br"));
  left.append(priorityText);

  taskitem.append(right);

  right.append(edit);
  right.append(del);
  tasklist.append(taskitem);
  title.value = "";
  priority.value = "";
  del.addEventListener("click", (e) => {
    removeNote(e);
  });

  edit.addEventListener("click", (e) => {
    editNote();
    removeNote(e);
  });

  function removeNote(e) {
    e.target.parentElement.parentElement.remove();
  }

  function editNote() {
    title.value = titleText.innerText;
    priority.value = priorityText.innerText;
  }

  // priorityText.style.color = 'red'
  // if(priorityText === 'High'){
  //    priorityText.style.color = 'red'
  
//   const obj = {
//     title: titleText.innerText,
//     priority: priorityText.innerText,
//   };

//   storageArr.push(obj);

//   localStorage.setItem("storage", JSON.stringify(storageArr));
//   localStorage(clear);

//   storageArr.forEach((note, index) => {
//     return (
//       <div key={index}>
//         <h3>{note.title}</h3>
//         <span>{note.priority}</span>
//       </div>
//     );
//   });
});
