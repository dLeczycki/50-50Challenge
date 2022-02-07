const pushNotificationBtn = document.querySelector("button");
const notificationContainer = document.querySelector(
  "div.notification-container"
);

const notificationTypes = ["success", "warning", "error"];

pushNotificationBtn.addEventListener("click", () =>
  pushNotification("Message")
);

function pushNotification(message) {
  const notification = document.createElement("div");
  const notificationType =
    notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
  notification.className = `notification ${notificationType}`;
  notification.textContent = message;

  notificationContainer.appendChild(notification);

  setTimeout(() => notification.classList.add("off"), 2500);
  setTimeout(() => notification.remove(), 3000);
}
