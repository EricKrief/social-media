import './UserCircle.css';

interface UserCircleProps {
  pictureUrl: string;
}

export const UserCircle = ({ pictureUrl }: UserCircleProps) => {
  return (
    <div className='user-circle'>
      <img src={pictureUrl} />
    </div>
  );
}