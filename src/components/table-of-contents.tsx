import type { MarkdownHeading } from 'astro';
import { useEffect, useState } from 'react';

interface TableOfContentsProps {
  headings: MarkdownHeading[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [active, setActive] = useState<string | undefined>(undefined);

  const minDepth = Math.min(...headings.map(heading => heading.depth));

  const updateActiveHeading = () => {
    const scrollY = window.scrollY + 72; // Adding the header height
    let closestHeading: HTMLElement | null = null;

    document.querySelectorAll('h2, h3').forEach(heading => {
      const headingTop = heading.getBoundingClientRect().top + window.scrollY;

      if (headingTop <= scrollY) {
        if (
          !closestHeading ||
          headingTop > closestHeading.getBoundingClientRect().top + window.scrollY
        ) {
          closestHeading = heading as HTMLElement; // Type assertion
        }
      }
    });

    if (closestHeading) {
      setActive((closestHeading as HTMLElement).id);
    }
  };

  useEffect(() => {
    // Initial check to set active heading
    updateActiveHeading();

    const handleScroll = () => {
      updateActiveHeading();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const clickHandler = (e: MouseEvent) => {
      const anchor = e.currentTarget as HTMLAnchorElement; // Access the anchor directly from the event
      e.preventDefault();
      const targetId = anchor.getAttribute('href'); // Accessing anchor directly
      const targetElement = document.querySelector(targetId!);

      if (targetElement) {
        // Calculate the position to scroll to
        const headerOffset = 72; // Height of the header
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset; // Adjusted position

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', clickHandler);

      // Clean up each event listener individually to avoid memory leaks
      return () => {
        anchor.removeEventListener('click', clickHandler);
      };
    });

    // Clean up event listeners on unmount
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', clickHandler); // In case you need this for further cleanup
      });
    };
  }, [headings]);

  return (
    <nav id="toc">
      <ul className="text-sm">
        {headings.map(({ slug, depth, text }, index) => (
          <li key={index}>
            <a
              id={slug}
              href={`#${slug}`}
              style={{ paddingLeft: `${depth - minDepth}rem` }}
              className={
                slug === active
                  ? 'line-clamp-1 text-primary-500 dark:text-primary-400'
                  : 'line-clamp-1'
              }
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
