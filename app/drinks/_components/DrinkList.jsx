import Image from "next/image";
import Link from "next/link";

const DrinkList = ({ drinks }) => {
  const dynamicDrinksList = drinks.map((drink) => {
    return (
      <Link className="join join-item bg-base-200 p-4 rounded-lg " key={drink.idDrink} href={`/drinks/${drink.idDrink}`}>
        <Image className="w-16 h-16 rounded-lg" src={drink.strDrinkThumb} alt={drink.strDrink} width={100} height={100} />
        <h6 className="text-lg m-auto">{drink.strDrink}</h6>
      </Link>
    );
  });

  return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">{dynamicDrinksList}</div>;
};
export default DrinkList;
