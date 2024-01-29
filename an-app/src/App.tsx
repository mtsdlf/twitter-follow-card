import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'
const users = [
  {
    name: "Fer Pozzo",
    userName: "pozzofer",
    isFollowing: true
  },
  {
    name: "Matias Dela",
    userName: "matias.dela",
    isFollowing: true
  }
]
function App() {
  return (
    <section className="app">
      {
        users.map(users => {
          const {userName, name, isFollowing} = users   
          return(
            <TwitterFollowCard userName={userName}  initialIsFollowing={isFollowing} key={userName}> 
            {name}
            </TwitterFollowCard> 
          )
        })
      }

   </section>
  )
}

export default App
