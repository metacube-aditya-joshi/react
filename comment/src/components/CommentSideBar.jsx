import React from 'react'

function CommentSideBar({commentHeading}) {
  return (
    <div>
        <img src="../../public/download.png" alt="" />
        <div>{commentHeading}</div>
    </div>
  )
}

export default CommentSideBar