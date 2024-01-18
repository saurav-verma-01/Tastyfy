import { useState } from "react";
import ItemList from "../ItemList/ItemList";

const ResCategory = ({ data }) => {
  const [showList, setShowList] = useState(false);
  // console.log(data);
  return (
    <div className="w-full mx-auto bg-slate-100 px-4 pt-4 pb-12 rounded-md shadow-md">
      {/* Accordion Header */}

      <div
        className=" flex justify-between  items-center   px-2 rounded-sm bg-black text-white cursor-pointer"
        onClick={() => setShowList((prev) => !prev)}
      >
        <p className="  font-bold text-lg">{data.title}</p>
        <span className="p-2 ">⬇️</span>
      </div>

      {showList && <ItemList items={data.itemCards} />}
      {/* Accordion Body */}
    </div>
  );
};

export default ResCategory;
