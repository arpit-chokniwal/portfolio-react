
export const getRealTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;
    const hoursFormatted = hours < 10 ? '0' + hours : hours;
    const optionsDate = { weekday: 'long', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', optionsDate);
    const time = `${hoursFormatted}:${minutesFormatted}`;
    return {
        date: date,
        time: time
    };
}