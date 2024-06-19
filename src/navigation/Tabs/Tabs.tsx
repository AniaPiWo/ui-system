import React, { useContext, PropsWithChildren } from "react";
import classNames from "classnames/bind";
import styles from "./Tabs.module.css";

const cx = classNames.bind(styles);

interface TabProps {
  label: string;
  index: number;
}

export const Tab = ({ label, index }: PropsWithChildren<TabProps>) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  const tabClasses = cx({
    tab: true,
    tabActive: activeTab === index,
    barActive: activeTab === index,
  });

  return (
    <div className={styles.tabWrapper} onClick={() => setActiveTab(index)}>
      <div className={tabClasses}>
        <p className={styles.label}>
          {label}
          <div className={styles.bar}></div>
        </p>
      </div>
    </div>
  );
};

interface TabContentProps {
  index: number;
}

export const TabContent = ({
  index,
  children,
}: PropsWithChildren<TabContentProps>) => {
  const { activeTab } = useContext(TabsContext);

  return activeTab === index ? (
    <div className={styles.tabContent}>{children}</div>
  ) : null;
};

interface TabData {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabData[];
  initialActiveTab?: number;
}

interface TabsContextProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TabsContext = React.createContext<TabsContextProps>({
  activeTab: 0,
  setActiveTab: () => {},
});

export const Tabs = ({
  tabs,
  initialActiveTab = 0,
}: PropsWithChildren<TabsProps>) => {
  const [activeTab, setActiveTab] = React.useState(initialActiveTab);

  return (
    <div className={styles.tabsWrapper}>
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        <div className={styles.tabsHeader}>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} index={index} />
          ))}
        </div>
        <div className={styles.tabsContent}>
          {tabs.map((tab, index) => (
            <TabContent key={index} index={index}>
              {tab.content}
            </TabContent>
          ))}
        </div>
      </TabsContext.Provider>
    </div>
  );
};
