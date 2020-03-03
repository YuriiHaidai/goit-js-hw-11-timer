class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.refs = {
      days: this.selector.querySelector('[data-value="days"]'),
      hours: this.selector.querySelector('[data-value="hours"]'),
      mins: this.selector.querySelector('[data-value="mins"]'),
      secs: this.selector.querySelector('[data-value="secs"]'),
    };
    this.start();
  }

  start() {
    setInterval(() => {
      const currentDate = Date.now();
      const time = this.targetDate - currentDate;

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      this.refs.days.textContent = days;
      this.refs.hours.textContent = String(hours).padStart(2, '0');
      this.refs.mins.textContent = String(mins).padStart(2, '0');
      this.refs.secs.textContent = String(secs).padStart(2, '0');
    }, 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});
