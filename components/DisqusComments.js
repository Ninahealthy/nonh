"use client";

import { DiscussionEmbed } from "disqus-react";
import styles from "@/components/disqus.module.css";

const DisqusComments = ({ url, identifier, title }) => {
  const disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  };

  return (
    <disqus className={styles.disqus}>
      <div className={styles.disq}>
        <DiscussionEmbed shortname="frnh" config={disqusConfig} />
      </div>
    </disqus>
  );
};

export default DisqusComments;
