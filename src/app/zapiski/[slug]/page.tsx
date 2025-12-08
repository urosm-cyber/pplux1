import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CloudinaryImage from '@/components/shared/CloudinaryImage';
import { journalPosts } from '../data';
import { Metadata as NextMetadata } from 'next';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<NextMetadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Članek ni najden | Patricia Pie',
    };
  }

  return {
    title: `${post.title} | Patricia Pie Zapiski`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full">
        {/* Article Hero */}
        <div className="relative w-full h-[50vh] min-h-[400px]">
           <CloudinaryImage
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              containerClassName="h-full w-full"
           />
           <div className="absolute inset-0 bg-black/40" />
           <div className="absolute inset-0 flex items-center justify-center text-center p-4">
              <div className="max-w-4xl space-y-6 text-white">
                 <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-wider opacity-90">
                    <span className="font-medium">{post.category}</span>
                    <span className="w-1 h-1 bg-white/50 rounded-full" />
                    <span>{post.date}</span>
                 </div>
                 <Heading size="xl" className="text-white drop-shadow-lg">{post.title}</Heading>
              </div>
           </div>
        </div>

        {/* Article Content */}
        <Section className="bg-background">
          <div className="max-w-2xl mx-auto">
             <div className="prose prose-lg prose-headings:font-heading prose-headings:font-normal prose-p:text-muted-foreground prose-a:text-tertiary hover:prose-a:text-foreground transition-colors mx-auto">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
             </div>

             {/* Back Button */}
             <div className="mt-16 pt-8 border-t border-secondary/20 flex justify-between items-center">
                <Link href="/zapiski">
                   <Button variant="ghost" size="sm">&larr; Nazaj na Zapiski</Button>
                </Link>
             </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
