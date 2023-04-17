const timer = (id, deadline) => {

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date())
        const days = Math.floor(t / (1000 * 60 * 60 * 24))
        const hours = Math.floor(t / (1000 * 60 * 60) % 24)
        const minutes = Math.floor((t / 1000 / 60) % 60)
        const seconds = Math.floor((t / 1000) % 60)

        return {
            total: t,
            days,
            hours,
            minutes,
            seconds,
            };
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
        return `0${num}`;
        } else {
        return num;
        }
    }

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector)
        const days = timer.querySelector("#days");
        const hours = timer.querySelector("#hours");
        const minutes = timer.querySelector("#minutes");
        const seconds = timer.querySelector("#seconds");
        const interval = setInterval(updateClock, 1000)
        
        updateClock()
    
        function updateClock() {
            const t = getTimeRemaining(endtime)

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total < 0) {
                clearInterval(interval)
                days.innerHTML = '00';
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
            }
        }
    }
    setClock(id, deadline)
}

export default timer