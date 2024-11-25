interface User {
    login: string;
    avatar_url: string;
    followers: number;
    name: string;
    bio: string;
  }
  
  interface UserCardProps {
    user: User;
  }
  
  const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
      <div className="userCard">
        <div>
        <img src={user.avatar_url} alt={user.name} />
        </div>
       <div>
       <h2>{user.name || user.login}</h2>
        <p>{user.bio}</p>
        <p>{user.followers} followers</p>
       </div>
      </div>
    );
  };
  
  export default UserCard;
  