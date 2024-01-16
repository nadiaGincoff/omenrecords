import type {MenuItemProps} from "@/types";

import Link from "next/link";

import {menuItems} from "../../data";

const MenuItem: React.FC<MenuItemProps> = ({size, href, value}) => {
  return (
    <Link passHref href={href}>
      <h1
        className={`${size} transform transition-transform hover:translate-x-1 hover:text-green-200`}
      >
        {value.toUpperCase()}
      </h1>
    </Link>
  );
};

function MenuItems({size}: {size: string}) {
  return (
    <div className="flex flex-row flex-nowrap gap-7">
      {menuItems.map(({id, href, value}) => (
        <MenuItem key={id} href={href} id={id} size={size} value={value} />
      ))}
    </div>
  );
}

export default MenuItems;
