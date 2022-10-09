import {AllPosts} from "../AllPosts/AllPosts";
import {LikedPosts} from "../LikedPosts/LikedPosts";
import {useContext, useState} from "react";
import {Context} from "../../App";
import {Button} from "../Button/Button";

type Tabs = 'all' | 'liked' | 'marked';

export const getTabList = (tab: Tabs) => {
  if(tab === 'all') {
    return <AllPosts />;
  };

  if(tab === 'liked') {
    return <LikedPosts />;
  };

  return null;
};

export const PostsTabs = () => {
  const { user } = useContext(Context);
  const [selectedTab, setSelectedTab] = useState<Tabs>('all');

  if(!user) {
    return <AllPosts />;
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Button
          styleBtn={selectedTab === "all" ? "button" : "button"}
          onClick={() => {
            setSelectedTab("all");
          }}
          text="All"
          disabled={false}
        />
        <Button
          styleBtn={selectedTab === "liked" ? "button" : "button"}
          onClick={() => {
            setSelectedTab("liked");
          }}
          text="Liked"
          disabled={false}
        />
        <Button
          styleBtn={selectedTab === "marked" ? "button" : "button"}
          onClick={() => {
            setSelectedTab("marked");
          }}
          text="Marked"
          disabled={false}
        />
      </div>
      {getTabList(selectedTab)}
    </>
  );
}