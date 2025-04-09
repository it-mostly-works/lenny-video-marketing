import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bone, Film, Edit, Share2, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-amber-100 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bone className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-amber-800">LennyVid</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#features"
                  className="text-amber-800 hover:text-amber-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-amber-800 hover:text-amber-600"
                >
                  About Lenny
                </a>
              </li>
              <li>
                <a href="#cta" className="text-amber-800 hover:text-amber-600">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">
              Meet Lenny: Your Furry Video Marketing Companion!
            </h1>
            <p className="text-xl text-amber-700 mb-8">
              Unleash the power of video with Lenny, the Irish Terrier who
              fetches success for your marketing!
            </p>
            <div className="relative w-64 h-64 mx-auto mb-8">
              <Image
                src="/lenny.webp?height=256&width=256"
                alt="Lenny the Irish Terrier"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Fetch Your Free Trial
            </Button>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-amber-800 text-center mb-12">
              Lenny's Tail-Wagging Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Film className="h-12 w-12 text-amber-600" />}
                title="Paw-some Hosting"
                description="Store your videos in Lenny's cozy digital doghouse, always ready for a playful stream."
              />
              <FeatureCard
                icon={<Edit className="h-12 w-12 text-amber-600" />}
                title="Fetch & Edit"
                description="Trim, cut, and polish your videos like Lenny grooms his shiny coat."
              />
              <FeatureCard
                icon={<Share2 className="h-12 w-12 text-amber-600" />}
                title="Share Like a Good Boy"
                description="Spread your content far and wide, just like Lenny chasing squirrels in the park."
              />
              <FeatureCard
                icon={<BarChart3 className="h-12 w-12 text-amber-600" />}
                title="Sniff Out Analytics"
                description="Track your video performance with the precision of Lenny's keen nose."
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-amber-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-amber-800 mb-8">
              About Lenny
            </h2>
            <p className="text-xl text-amber-700 mb-8">
              Lenny is not your average Irish Terrier. With his reddish-brown
              fur and a nose for success, he's the brains behind our video
              marketing tool. Lenny believes that every bark should be heard,
              just like every video should be seen!
            </p>
            <div className="relative w-80 h-80 mx-auto">
              <Image
                src="/lenny2.webp?height=320&width=320"
                alt="Lenny at work"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section id="cta" className="py-20 bg-amber-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Play Fetch with Your Video Content?
            </h2>
            <p className="text-xl mb-8">
              Join Lenny's pack and unleash the full potential of your video
              marketing!
            </p>
            <Button className="bg-white text-amber-600 hover:bg-amber-100">
              Start Your Adventure with Lenny
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-amber-800 text-amber-100 py-8">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2025 LennyVid. All rights reserved. Treats and belly rubs
            appreciated.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col items-center">
          {icon}
          <span className="mt-4 text-xl font-semibold text-amber-800">
            {title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-amber-700">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
