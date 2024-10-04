import { Mail } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { GitHub } from '@/components/ui/icons';
import { Link } from '@/components/ui/link';
import { PROFILE } from '@/config';

const ProfileCard = () => {
  const { username, picture, email, githubUrl } = PROFILE;

  return (
    <Card className="border-none bg-transparent shadow-none dark:bg-transparent">
      <CardHeader className="place-items-center p-2">
        <Avatar className="size-28">
          <AvatarImage src={picture} alt={username} />
          <AvatarFallback>{username}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="p-2 text-center text-lg font-semibold">{username}</CardContent>
      <CardFooter className="flex items-center justify-center gap-x-0.5 p-2">
        <Link
          href={`mailto:${email}`}
          className="rounded-full bg-transparent p-2.5 outline-none hover:bg-transparent/5 dark:hover:bg-default-50/5"
        >
          <Mail strokeWidth="2.5" className="size-5" />
        </Link>
        <Link
          href={githubUrl}
          className="rounded-full bg-transparent p-2.5 outline-none hover:bg-transparent/5 dark:hover:bg-default-50/5"
        >
          <GitHub strokeWidth="2.5" className="size-5" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
