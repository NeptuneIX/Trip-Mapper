import { notifications } from '@mantine/notifications';
import { IconAlertCircle } from '@tabler/icons-react';

export default function showError(error) {
  notifications.show({
    title: "Error",
    message: `The following error occurred: ${error}`,
    color: "white",
    icon: <IconAlertCircle size={18} />,
    autoClose: 5000,
    style: { backgroundColor: "#fa5252" },
  });
}
