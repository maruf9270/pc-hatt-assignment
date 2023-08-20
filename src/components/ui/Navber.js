import Link from "next/link";

const Navber = () => {
  const nevberItems = [
    "Motherboard",
    "RAM",
    "Cpu",
    "Power-Supply",
    "Storage-Device",
    "Monitor",
    "Others",
  ];
  const navContent = nevberItems.map((item) => {
    return (
      <li key={item}>
        <Link href={`/pc-parts/${item}`} key={item}>
          {item}
        </Link>
      </li>
    );
  });
  return (
    <div>
      <div className="navbar bg-base-100 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Category</a>
                <ul className="p-2">{navContent}</ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" href={"/"}>
            Pc Builder
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 z-50">{navContent}</ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
