//format seconds in minutes and hours

export const formatTime = (time: number) => {
  const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
  const minutes = Math.floor(time / 60);
  const getMinutes = `0${minutes % 60}`.slice(-2);

  return `${getMinutes}:${getSeconds}`;
};
