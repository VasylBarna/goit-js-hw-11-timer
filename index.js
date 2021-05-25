class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.start();
  }

  start() {
    const days = document.querySelector(`${this.selector} [data-value="days"]`);
    const hours = document.querySelector(
      `${this.selector} [data-value="hours"]`
    );
    const mins = document.querySelector(`${this.selector} [data-value="mins"]`);
    const secs = document.querySelector(`${this.selector} [data-value="secs"]`);

    this.intervalId = setInterval(() => {
      const newDate = Date.now();
      const time = this.targetDate - newDate;
      if (time < 1000) {
        clearInterval(this.intervalId);
      }
      days.textContent = String(
        Math.floor(time / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      hours.textContent = String(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      mins.textContent = String(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      secs.textContent = String(
        Math.floor((time % (1000 * 60)) / 1000)
      ).padStart(2, "0");
    }, 1000);
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 06, 2021"),
});
