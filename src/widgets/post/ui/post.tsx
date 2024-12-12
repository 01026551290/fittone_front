'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowBigUp, ChevronUp, ChevronDown, MessageSquare, Share2 } from 'lucide-react';

export function Post({ post }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldCollapse = post.content.length > 200;

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4 p-6">
        <Avatar className="w-10 h-10">
          <AvatarImage src={`https://avatar.vercel.sh/${post.author}.png`} alt={post.author} />
          <AvatarFallback>{post.author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <CardTitle>{post.title}</CardTitle>
          <div className="text-sm text-muted-foreground mt-2">
            Posted by {post.author} • {post.timestamp}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6 py-4">
        <p className={shouldCollapse && !isExpanded ? 'line-clamp-3' : ''}>{post.content}</p>
        {shouldCollapse && (
          <Button variant="link" onClick={() => setIsExpanded(!isExpanded)} className="mt-4">
            {isExpanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Show more
              </>
            )}
          </Button>
        )}

        {post.media && (
          <div className="mt-6">
            {post.media.type === 'image' ? (
              <div className="relative w-full h-[280px]">
                <img
                  src={post.media.url}
                  alt="Post media"
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            ) : (
              <div className="relative w-full h-[280px]">
                <video
                  src={post.media.url}
                  controls
                  className="object-cover w-full h-full rounded-md"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between p-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <ArrowBigUp className="h-4 w-4" />
            <span>{post.upvotes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>{post.comments}</span>
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
