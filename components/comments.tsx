'use client';

import { useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { SiYoutube } from '@icons-pack/react-simple-icons';

import Masonry from 'react-masonry-css';

import { commentsData } from '@/lib/comments';

const COMMENTS_STEP = 6;
const COMMENTS_MAX = 78;

const breakpointColumnsObj = {
  default: 2,
  512: 1,
};

export default function Comments() {
  const [visibleCount, setVisibleCount] = useState(COMMENTS_STEP);

  const handleLoadMore = () => {
    setVisibleCount(count => Math.min(count + COMMENTS_STEP, COMMENTS_MAX));
  };

  const handleCollapse = () => setVisibleCount(COMMENTS_STEP);

  const commentsList = commentsData.slice(0, visibleCount);

  return (
    <section className="mt-18 max-w-xl m-auto px-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex ml-[-1rem] w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {commentsList.map(({ id, comment, name }) => (
          <Card key={id} className="mb-4">
            <CardContent>
              <p className="leading-5 text-xs font-mono">{comment}</p>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
                <SiYoutube size="1em" /> {name}
              </p>
            </CardFooter>
          </Card>
        ))}
      </Masonry>
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          onClick={handleLoadMore}
          variant="outline"
          size="sm"
          disabled={commentsList.length === COMMENTS_MAX}
        >
          Load more
        </Button>
        {commentsList.length > COMMENTS_STEP && (
          <Button onClick={handleCollapse} size="sm">
            Collapse
          </Button>
        )}
      </div>
    </section>
  );
}
