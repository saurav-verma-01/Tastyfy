import MenuItem from "../MenuItem/MenuItem";

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div className="flex flex-col gap-4 pt-4   ">
      {items.map((item) => (
        <MenuItem item={item} key={item.card.info.id} />
      ))}
    </div>
  );
};

export default ItemList;
