export function timeToHHMMSS(time: number) {
  const hoursNumber = Math.floor(time / (1000 * 60 * 60));
  const minutesNumber = Math.floor((time / (1000 * 60)) % 60);
  const secondsNumber = Math.floor((time / 1000) % 60);
  const hours = [
    String(hoursNumber / 10).slice(0, 1),
    String(hoursNumber % 10),
  ];
  const minutes = [
    String(minutesNumber / 10).slice(0, 1),
    String(minutesNumber % 10),
  ];
  const seconds = [
    String(secondsNumber / 10).slice(0, 1),
    String(secondsNumber % 10),
  ];
  return { seconds, minutes, hours };
}
