import ProfileCard from '@/components/profile-card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { PROFILE } from '@/config';

const ProfileHoverCard = () => {
  const { username } = PROFILE;

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <button type="button" className="text-inherit underline-offset-2 hover:underline">
          {username}
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-52">
        <ProfileCard />
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProfileHoverCard;
