import React from "react";
import styles from "./PluginList.module.css";

const placeholderVSTs = [
  {
    name: "bloom bass groove",
    description: "soulful bass - £19",
    image: "/images/plugins/bloombassgroove.png",
  },
  {
    name: "mycrush",
    description: "a brutal & crazy crush - £0",
    image: "/images/plugins/mycrush.png",
  },
  {
    name: "bloom vocal aether",
    description: "effortless vocals - £59",
    image: "/images/plugins/bloomvocalaether.png",
  },
];

const PluginList = () => {
  return (
    <div className={styles.pluginList}>
      {placeholderVSTs.map((vst, index) => (
        <div key={index} className={styles.pluginItem}>
          <img src={vst.image} alt={vst.name} className={styles.pluginImage} />
          <h3>{vst.name}</h3>
          <p>{vst.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PluginList;
