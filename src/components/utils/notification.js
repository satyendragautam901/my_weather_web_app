// utils/notification.js
export const checkTempChange = (forecast) => {
  const today = forecast[0].main.temp;
  const twoDaysLater = forecast.find(item => item.dt_txt.includes("18:00:00")).main.temp;

  const diff = Math.abs(today - twoDaysLater);
  if (diff > 5) {
    notifyUser(diff > 0 ? 'increase' : 'decrease', diff);
  }
};

function notifyUser(type, diff) {
  if (Notification.permission === 'granted') {
    new Notification(`Temp ${type} by ${diff.toFixed(1)}°C expected in next 2 days!`);
  }
}
