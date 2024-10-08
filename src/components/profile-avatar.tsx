import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PROFILE } from '@/config';

interface ProfileAvatarProps {
  className?: string;
}

const ProfileAvatar = ({ className }: ProfileAvatarProps) => {
  const { username, picture } = PROFILE;

  return (
    <Avatar className={className}>
      <AvatarImage src={picture} alt={username} />
      <AvatarFallback>{username}</AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
