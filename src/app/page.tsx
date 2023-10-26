import { Suspense } from "react";
import GitHubProfile from "./components/github-profile";
import LongWaitComponent from "./components/long-wait-component";

export default async function Home() {
  
  return(
    <div>
      <h1>Home</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate, ipsum fuga quibusdam ducimus debitis nam recusandae beatae, adipisci officia. Dicta ipsum nostrum eius autem reiciendis fugiat dolor in.</p>

      <Suspense fallback={<p>LongWaitComponent loading</p>}>
      <LongWaitComponent />
      </Suspense>
      
      <Suspense fallback={<p>GitHubProfile loading</p>}>
      <GitHubProfile />
      </Suspense>
    </div>
  )
  
}
