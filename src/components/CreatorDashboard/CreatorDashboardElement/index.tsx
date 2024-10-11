import { Dispatch, FC, SetStateAction } from "react";
import { Accordion } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { ICreatorDashboardElement } from "../index";
import styles from "./CreatorDashboardElement.module.scss";
import cn from "clsx";

const CreatorDashboardElement: FC<{
  element: ICreatorDashboardElement;
  selectItem: string;
  setSelectItem: Dispatch<SetStateAction<string>>;
}> = ({ element, setSelectItem, selectItem }) => {
  const nav = useNavigate();
  const handleSelectItem = (path: string, title: string) => {
    nav(path);
    setSelectItem(title);
  };
  return (
    <Accordion>
      <Accordion.Item key={element.title} value={element.title}>
        <Accordion.Control icon={element.icon}>
          {element.title}
        </Accordion.Control>
        <Accordion.Panel>
          {element.items.map((item) => (
            <div
              onClick={() => handleSelectItem(item.path, item.titleItem)}
              className={cn(styles.CreatorDashboardElement,{
                [styles.active]:item.titleItem === selectItem
              })}
            >
              {item.titleItem}
            </div>
          ))}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default CreatorDashboardElement;