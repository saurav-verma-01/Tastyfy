import { useEffect, useState } from "react";
import { SINGLE_RESTRAUNT_INFO } from "../constants";

const useRestrauntMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);
  //  Fetch Restraunt Data

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const res = await fetch(SINGLE_RESTRAUNT_INFO + resID);
    const data = await res.json();
    setResInfo(data);
  };

  return resInfo;
};

export default useRestrauntMenu;
