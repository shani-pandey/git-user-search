interface Repo {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
  }
  
  interface RepoListProps {
    repos: Repo[];
  }
  
  const RepoList: React.FC<RepoListProps> = ({ repos }) => {
    return (
      <div className="repo">
        <h3>Repositories</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.name}>
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>
              <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RepoList;
  