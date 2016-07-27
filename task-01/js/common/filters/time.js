define(function () {
    const time = () => {
        return (time) => {
            var hours = Math.floor(time / 60);
            var minutes = Math.floor(time % 60);
            return `${hours} h ${minutes} min`;
        }
    };

    return time;
});