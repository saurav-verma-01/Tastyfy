import ItemList from "../ItemList/ItemList";

const ResCategory = ({ data, showList, onShow, i }) => {
  return (
    <div className="w-full mx-auto bg-slate-100 px-4 pt-4 pb-12 rounded-md shadow-md">
      {/* Accordion Header */}

      <div
        className=" flex justify-between  items-center   px-2 rounded-sm bg-gray-500 text-white cursor-pointer"
        onClick={() => onShow(i)}
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
