import Link from "next/link";

const NavBar = () => {
  const tabsList = ["About", "Client", "Drinks", "Prisma-example", "Query", "Tasks"];

  const tabs = tabsList.map((tab) => {
    return (
      <li key={tab}>
        <Link className="capitalize" href={"/" + tab.toLowerCase()}>{tab}</Link>
      </li>
    );
  });

  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link className="btn btn-primary" href={"/"}>
          Home
        </Link>
        <ul className="menu menu-horizontal md:ml-8">{tabs}</ul>
      </div>
    </nav>
  );
};
export default NavBar;
