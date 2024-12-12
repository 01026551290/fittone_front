'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { createClient } from '@/lib/supabase-utils-client';

export function Login() {
  const supabase = createClient();
  const signInWithKakao = async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: 'http://localhost:3000',
      },
    });

    if (data?.url) {
      window.open(data.url, '_blank', 'width=500,height=600');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login to FIT TONE</CardTitle>
          <CardDescription className="text-center">
            Enter your username and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username or Email</Label>
            <Input id="username" placeholder="Enter your username or email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full">Log In</Button>
          <a href="#" className="text-sm text-center text-primary hover:underline mt-2">
            Forgot password?
          </a>
          <Separator className="my-4" />
          <div className="space-y-2 w-full">
            <Button variant="outline" className="w-full" onClick={signInWithKakao}>
              Continue with Kakao
            </Button>
            <Button variant="outline" className="w-full">
              Continue with Twitter
            </Button>
          </div>
          <p className="text-sm text-center text-muted-foreground mt-4">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
