import { notifications } from '@mantine/notifications';

export default function showError(message) {
  notifications.show({
    title: "Status",
    message: `${message}`,
    color: "green.6",
    autoClose: 3000,
  });
}
