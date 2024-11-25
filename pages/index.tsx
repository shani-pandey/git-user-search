import { useState } from 'react';
import RepoList from '@/src/components/RepoList';
import SearchBar from '@/src/components/SearchBar';
import UserCard from '@/src/components/UserCard';




const IndexPage = () => {
 
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const searchUser = async (username: string) => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`).then((res) => res.json());
      
      setUser(userResponse);      
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`).then((res) => res.json());
      setRepos(reposResponse);
      setError(null);
    } catch (err) {
      setError('User not found');
      setUser(null);
      setRepos([]);
    }
  };

  return (
    <div className='mainArea'>
       { <h2>Search for GitHub Users and Display User Profiles</h2>}
      <SearchBar onSearch={searchUser} />
     
      {error && <p>{error}</p>}
      {user && <UserCard user={user} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
};

export default IndexPage;
