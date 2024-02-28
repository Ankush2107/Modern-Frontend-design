const containers = document.querySelectorAll("#container");

// individually also u can make this in css also

containers.forEach((div, index) => {
  div.style.width = `${(index + 1) * 50}px`;
  div.style.zIndex = `${container.length - index}`;
});
