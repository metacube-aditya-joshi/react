import './App.css'
import Post from './components/Post'
import { posts } from './data/posts'
function App() {


  return (
    <>
      <div className='blog-header'>
        Blog Posts
        </div>
        <div className='post-cont'>{
          posts.map((post)=><Post title={post.title} description={post.description}/>)
        }</div>
    </>
  )
}

export default App
