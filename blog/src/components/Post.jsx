import React from "react";

function Post({ title,description }) {
  const postTitle = title;
  const postDesc = description;
  console.log(postDesc+" "+postTitle);
  return (
    <div className="post">
        <img src="../../public/avtar.jpg"/>

      <div>{postTitle}</div>
      <div>{postDesc}</div>
      <img src="../../public/like.png"/>
    </div>
  );
}

export default Post;
