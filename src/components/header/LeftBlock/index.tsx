import { FC, memo, useState } from "react";
import TwitchLogoImg from "../../../assets/TwitchLogo.svg";
import styles from "./LeftBlock.module.scss";
import cn from "clsx";
import OptionsImg from "../../../assets/Options.svg";
import { useLocation, useNavigate } from "react-router-dom";

export const selectSectionType = {
  following: "Following",
  browse: "Browse",
};
const LeftBlock: FC = () => {
  const [selectSection, setSelectSection] = useState<
    typeof selectSectionType | string
  >("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className={styles.leftBlock} data-testid="left-block">
      <img
        src={TwitchLogoImg}
        onClick={() => navigate("/", { replace: true })}
        alt="Logo"
      />
      <h3
        className={cn({
          [styles.active]:
            selectSection === selectSectionType.following && pathname !== "/",
        })}
        onClick={() => setSelectSection(selectSectionType.following)}
      >
        {selectSectionType.following}
      </h3>
      <h3
        className={cn({
          [styles.active]:
            selectSection === selectSectionType.browse || pathname === "/",
        })}
        onClick={() => setSelectSection(selectSectionType.browse)}
      >
        {selectSectionType.browse}
      </h3>
      <img src={OptionsImg} alt="Logo" />
    </div>
  );
};

export default memo(LeftBlock);