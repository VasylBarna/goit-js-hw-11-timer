class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.days = document.querySelector(`${this.selector} [data-value="days"]`);
    this.hours = document.querySelector(
      `${this.selector} [data-value="hours"]`
    );
    this.secs = document.querySelector(`${this.selector} [data-value="secs"]`);
    this.mins = document.querySelector(`${this.selector} [data-value="mins"]`);
  }

  displayTime({ days, hours, mins, secs }) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.mins.textContent = `${mins}`;
    this.secs.textContent = `${secs}`;
  }

  calculationTime(time) {
    const days = this.cutBack(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.cutBack(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.cutBack(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    const secs = this.cutBack(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  cutBack(value) {
    return String(value).padStart(2, "0");
  }

  start() {
    setInterval(() => {
      const newDate = Date.now();
      const differenceTime = this.targetDate.getTime() - newDate;
      const time = this.calculationTime(differenceTime);
      console.log(time);
      this.displayTime(time);
    }, 1000);
  }
}

const myTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 06, 2021"),
});

myTimer.start();
