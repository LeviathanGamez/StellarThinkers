function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const dragged = document.getElementById(data)
  
   if (!ev.target.classList.contains(dragged.className)) {
    alert("You can't drop this here!");
    return;
  }

  ev.target.appendChild(dragged);
}

