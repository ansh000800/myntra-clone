import BagItemContainer from "../components/BagItemContainer";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div class="bag-page">
        {finalItems.map((item) => (
          <BagItemContainer item={item} />
        ))}

        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
