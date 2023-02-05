document.addEventListener('DOMContentLoaded', () => {

    const timerShow = document.createElement('div'),
    curTime = new Date();

    document.body.appendChild(timerShow);
    
    setInterval(() => {

        let msDiff = new Date() - curTime,
            days = Math.floor(msDiff / (24 * 60 * 60 * 1000)),
            hours = Math.floor((msDiff / (1000 * 60 * 60)) % 24),
            minuts = Math.floor((msDiff / 1000 / 60) % 60),
            seconds = Math.floor((msDiff / 1000) % 60);

        let strTimer = `${Math.trunc(hours)} ${hours == 1 ? 'hour' : 'hours'} ${Math.trunc(minuts)} ${minuts == 1 ? 'minute' : 'minutes'} ${seconds} ${seconds == 1 ? 'second' : 'seconds'}`;
        timerShow.innerHTML = `You've been here for ${strTimer}`;
    }, 1000);

})
