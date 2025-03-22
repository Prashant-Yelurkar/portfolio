import Layout from "@/Components/Layout/Layout";
import About from "@/Components/Sections/about";
import Contact from "@/Components/Sections/contact";
import Resume from "@/Components/Sections/resume";
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react'

const Index = () => {
  const TabData = [
    {
      label: "About",
      tab: <About />,
    },
    {
      label: "Resume",
      tab: <Resume />,
    },
    {
      label: "Projects",
      tab: '',
    },
    {
      label: "Contact",
      tab: <Contact />,
    }
  ]
  const [selectedTab, setSelectedTab] = useState(TabData[0])
  return (
    <Layout title={"My Portfolio | " + selectedTab.label}>
      <div className={styles.main}>
        <div
          className={styles.block}>
          <div
            className={styles.tab_container}>
            <div className={styles.tab_inner_container}>
              {
                TabData.map((tab, index) => {
                  return (
                    <div
                      onClick={() => setSelectedTab(tab)}
                      className={`${styles.tab} ${selectedTab.label === tab.label ? styles.selected_tab : ''}`}
                      key={index}>
                      {tab.label}
                    </div>
                  )
                })
              }
            </div>
          </div>
          {selectedTab.tab}
        </div>
      </div>
    </Layout>
  )
}

export default Index