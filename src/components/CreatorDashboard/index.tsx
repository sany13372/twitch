import {FC, memo, ReactNode, useMemo, useState} from "react";
import cn from "clsx";
import styles from "./CreatorDashboard.module.scss";
import { Burger } from "@mantine/core";
import { IoIosSettings } from "react-icons/io";
import CreatorDashboardElement from "./CreatorDashboardElement";

export interface ICreatorDashboardElement {
  title: string;
  icon: ReactNode;
  items: { titleItem: string; path: string }[];
}

const CreatorDashboard: FC = () => {
  const [selectItem, setSelectItem] = useState<string>("Channel");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const itemsMenu: ICreatorDashboardElement[] = useMemo(
    () => [
      {
        title: "Settings",
        icon: <IoIosSettings />,
        items: [
          {
            path: "/createProfileUser",
            titleItem: "Channel",
          },
          {
            path: "/createProfileUser",
            titleItem: "Stream",
          },
          {
            path: "/createProfileUser",
            titleItem: "Moderation",
          },
        ],
      },
    ],
    [],
  );
  return (
    <div
      className={cn(styles.Dashboard, {
        [styles.close]: !isOpen,
        [styles.open]: isOpen,
      })}
    >
      <div className={styles.header}>
        <h5>CREATOR DASHBOARD</h5>
        <Burger
          opened={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        />
      </div>
      {itemsMenu.map((el) => (
        <CreatorDashboardElement
          setSelectItem={setSelectItem}
          selectItem={selectItem}
          element={el}
          key={el.title}
        />
      ))}
    </div>
  );
};

export default memo(CreatorDashboard);