window.addEventListener("load", () => {
  let hour = document.getElementById("clock-hour");
  let minute = document.getElementById("clock-min");
  let second = document.getElementById("clock-sec");
  const show_time = () => {
    let date = new Date();
    hour.textContent = String(date.getHours()).padStart(2, "0");
    minute.textContent = String(date.getMinutes()).padStart(2, "0");
    second.textContent = String(date.getSeconds()).padStart(2, "0");
    setTimeout(show_time, 1000);
  };
  show_time();
});
