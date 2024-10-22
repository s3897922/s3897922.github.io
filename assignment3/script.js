let draggedElement = null;
let offsetX = 0;
let offsetY = 0;

const draggables = document.querySelectorAll(".polaroid, .sticker");

draggables.forEach((item) => {
  item.addEventListener("mousedown", (event) => startDrag(event, item));
});

document.addEventListener("mousemove", handleDrag);
document.addEventListener("mouseup", endDrag);

function startDrag(event, item) {
  event.preventDefault();
  draggedElement = item;
  const rect = draggedElement.getBoundingClientRect();
  offsetX = event.clientX - rect.left;
  offsetY = event.clientY - rect.top;
  draggedElement.style.position = "fixed";
  draggedElement.style.zIndex = draggedElement.classList.contains("sticker")
    ? "3"
    : "2";
  draggedElement.style.cursor = "grabbing";
  moveAt(event.clientX, event.clientY);
}

function moveAt(clientX, clientY) {
  if (!draggedElement) return;
  draggedElement.style.left = `${clientX - offsetX}px`;
  draggedElement.style.top = `${clientY - offsetY}px`;
}

function handleDrag(event) {
  if (!draggedElement) return;
  moveAt(event.clientX, event.clientY);
}

function endDrag() {
  if (draggedElement) {
    draggedElement.style.cursor = "grab";
    draggedElement = null;
  }
}
