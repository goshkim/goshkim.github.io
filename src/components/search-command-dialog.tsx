import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Link } from '@/components/ui/link';

interface SearchCommandDialogProps {
  posts: { slug: string; data: { title: string } }[];
}

// TODO: 단축키 ui 표시
const SearchCommandDialog = ({ posts }: SearchCommandDialogProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === '/') {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="검색"
        onClick={() => setOpen(true)}
        className="rounded-full bg-transparent p-2.5 outline-none hover:bg-transparent/5 dark:hover:bg-default-50/5"
      >
        <Search strokeWidth="2.5" className="size-5" />
        <span className="sr-only">검색</span>
        {/* <CommandShortcut>/</CommandShortcut> */}
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="게시글 제목을 입력해 주세요" />
        <CommandList>
          <CommandEmpty className="py-6 text-center font-medium">
            검색 결과가 없습니다.
          </CommandEmpty>
          {posts.map(({ slug, data: { title } }) => (
            <CommandItem key={slug} asChild>
              <Link href={`/${slug}`} underline="none" className="cursor-pointer">
                {title}
              </Link>
            </CommandItem>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchCommandDialog;
