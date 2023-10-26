export default async function GitHubProfile(){
	await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/Ca-byte')
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}