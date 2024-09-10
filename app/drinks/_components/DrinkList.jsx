import Link from "next/link";

const DrinkList = ({ drinks }) => {
  const dynamicDrinksList = drinks.map((drink) => {
    return (
      <li key={drink.idDrink}>
        <Link className="capitalize text-xl font-medium" href={`/drinks/${drink.idDrink}`}>
          {drink.strDrink}
        </Link>
      </li>
    );
  });

  return <ul className="menu menu-horizontal p-0">{dynamicDrinksList}</ul>;
};
export default DrinkList;
