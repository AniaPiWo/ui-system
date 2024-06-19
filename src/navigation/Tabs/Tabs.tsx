import React, { useContext, PropsWithChildren } from "react";
import classNames from "classnames/bind";

import styles from "./Tabs.module.css";

const cx = classNames.bind(styles);

interface TabProps {
  label: string;
  index: number;
}

export const Tab = ({ label, index }: PropsWithChildren<TabProps>) => {
  const { activeTab } = useContext(TabsContext);

  const tabClasses = cx({
    tab: true,
    tabActive: activeTab === index,
    barActive: activeTab === index,
  });

  return (
    <div className={styles.stepWrapper}>
      <div className={tabClasses}>
        {" "}
        <p className={styles.label}>
          {label}
          <div className={styles.bar}></div>
        </p>
      </div>
    </div>
  );
};

interface TabsProps {
  activeTab: number;
}

const TabsContext = React.createContext<TabsProps>({
  activeTab: 0,
});

export const Tabs = ({ activeTab, ...props }: PropsWithChildren<TabsProps>) => {
  return (
    <div className={styles.tabsWrapper}>
      <TabsContext.Provider value={{ activeTab }}>
        {props.children}
      </TabsContext.Provider>
    </div>
  );
};
