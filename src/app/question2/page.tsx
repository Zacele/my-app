'use client'
import React from 'react'

async function getUser() {
  const res = await fetch("https://api.github.com/users/defunkt");
  const user: any = await res.json();
  return user;
}

function useUser() {
    const [user, setUser] = React.useState(null)
    const [loading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
    if(user === null){
        getUser().then(res => {
        setIsLoading(false)
        setUser(res)
    })
    }
    }, [user])


    return  { loading , user }
}

function ChildA() {
  const { user, loading } = useUser();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>No user</div>;
  }
  return <div>{user.name}</div>;
}

export default function App() {
    useUser();
  return (
    <div className="App">
      <ChildA />
    </div>
  );
}
