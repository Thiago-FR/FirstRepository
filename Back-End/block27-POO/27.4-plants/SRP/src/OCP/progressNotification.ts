/* eslint-disable */
type Notification = { 
  type: string, 
  send: (message: string) => void,
};
/* eslint-enable */

const consoleNotification: Notification = {
  type: 'Console',
  send: (message: string): void => {
    console.log('Console', message);
  },
};

const emailNotification: Notification = {
  type: 'Email',
  send: (message) => {
    console.log('Email: ', message);
  },
};

const phoneNotification: Notification = {
  type: 'Phone',
  send: (message) => {
    console.log('Phone: ', message);
  },
};

const notifications: Notification[] = [
  consoleNotification, emailNotification, phoneNotification,
];

export default function progressNotification(
  message: string,
  type = 'Console',
  notificationsArray: Notification[] = notifications,
): void {
  notificationsArray.forEach((notification) => {
    if (notification.type === type) {
      notification.send(message);
    }
  });
}