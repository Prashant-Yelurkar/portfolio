import React, { useEffect, useRef, useState } from 'react'
import Layout from "@/Components/Layout/Layout";
import About from "@/Components/Sections/about";
import Contact from "@/Components/Sections/contact";
import Project from "@/Components/Sections/projects";
import Resume from "@/Components/Sections/resume";
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import Exprience from '@/Components/Sections/exprience';

const Home = ({ tab }) => {
  const router = useRouter()
  const blockRef = useRef();

  const handleTabChange = (tab) => {
    if (selectedTab?.label === tab?.label) return;
    router.push(tab.label.toLowerCase())
    if (blockRef.current) {
      console.log("scroll");

      blockRef.current.scrollTop = 0;
    }
  };

  const onTabChnage = () => {
    if (blockRef.current) {
      console.log("scroll2");
      blockRef.current.scrollTop = 0;
    }
  }


  const TabData = [
    {
      label: "About",
      tab: <About />,
    },
    {
      label: "Resume",
      tab: <Resume onChange={onTabChnage} />,
    },
    {
      label: "Projects",
      tab: <Project />,
    },
    {
      label: "Contact",
      tab: <Contact />,
    }
  ];

  const [selectedTab, setSelectedTab] = useState(
    TabData.find((item) => item.label.toLowerCase() === tab?.toLowerCase()) || TabData[0]
  );


  useEffect(() => {
    setSelectedTab(TabData.find((item) => item.label.toLowerCase() === tab?.toLowerCase()) || TabData[0])
  }, [tab])

  return (
    <Layout title={"My Portfolio | " + selectedTab.label}>
      <div className={styles.main}>
        <div ref={blockRef} className={styles.block}>
          <div className={styles.tab_container}>
            <div className={styles.tab_inner_container}>
              {TabData.map((tabItem, index) => (
                <div
                  onClick={() => handleTabChange(tabItem)}
                  className={`${styles.tab} ${selectedTab.label === tabItem.label ? styles.selected_tab : ''}`}
                  key={index}
                >
                  {tabItem.label}
                </div>
              ))}
            </div>
          </div>
          {selectedTab.tab}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
