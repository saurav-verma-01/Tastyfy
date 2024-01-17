import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // Check if Online

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  // Return True or False
  return onlineStatus;
};

export default useOnlineStatus;
