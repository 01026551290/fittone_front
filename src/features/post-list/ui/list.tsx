'use server';

import { Post } from '@/widgets/post';
import { createClient } from '@/lib/supabase-utils-server';

const posts = [
  {
    id: 1,
    title: 'Check out this cool new tech!',
    author: 'techEnthusiast',
    timestamp: '2 hours ago',
    upvotes: 152,
    comments: 23,
    content:
      "Just got my hands on the latest gadget and I'm blown away! The interface is intuitive, the performance is top-notch, and it's changing the way I work. Here's a quick demo:",
    media: {
      type: 'image',
      url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F408%2F2024%2F11%2F06%2F0000241431_001_20241106202209466.jpg&type=a340',
    },
  },
  {
    id: 2,
    title: "What's your favorite programming language?",
    author: 'codeNinja',
    timestamp: '5 hours ago',
    upvotes: 98,
    comments: 87,
    content:
      "I've been coding for years and I'm curious to hear from the community. What's your go-to programming language and why? I personally love Python for its simplicity and versatility, but I'm always open to exploring new languages. Share your thoughts and experiences below!",
  },
  {
    id: 3,
    title: 'Just launched my first app!',
    author: 'newDeveloper',
    timestamp: '1 day ago',
    upvotes: 304,
    comments: 56,
    content:
      "After months of hard work, I'm excited to announce that my first app is now live on the App Store! It's a productivity tool designed to help freelancers manage their time and projects more effectively. Here's a quick walkthrough of the main features:",
    media: {
      type: 'video',
      url: 'https://example.com/app-walkthrough.mp4',
    },
  },
];

export async function List() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  console.log('supabase', supabase.auth.getSession());
  console.log('data', data);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Popular Posts</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
