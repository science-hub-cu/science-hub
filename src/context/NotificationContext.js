const { useState, useEffect, useContext } = require("react");
const { createContext } = require("react");

const NotificationContext = createContext();
export function useNotification() {
  return useContext(NotificationContext);
}

export function NotificationProvider({ children }) {
  const [notificationsList, setNotificationsList] = useState([]);
  const addNotification = (notification) =>
    setNotificationsList((cur) => [notification, ...cur]);

  useEffect(() => {
    addNotification({
      key: 0,
      userName: "omarKenawi",
      time: "10:10pm",
      action: " upvote your post",
      image:
        "https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg",
    });
    addNotification({
      key: 1,
      userName: "Bakar",
      time: "20:20",
      action: " Ay haga",
      image:
        "https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg",
    });
  }, []);

  return (
    <NotificationContext.Provider value={{ notificationsList }}>
      {children}
    </NotificationContext.Provider>
  );
}
