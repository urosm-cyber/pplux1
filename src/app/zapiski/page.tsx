import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CloudinaryImage from '@/components/shared/CloudinaryImage';
import { journalPosts } from './data';

export const metadata: Metadata = {
  title: 'Zapiski | Zgodbe, nasveti in navdih | Patricia Pie',
  description: 'Preberite naše najnovejše zapiske o modi, stilu, trajnostni gradnji garderobe in dogajanju v našem ateljeju.',
};

export default function ZapiskiPage() {
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />
      
      <main className="flex-1 w-full">
        {/* Simple Text Hero */}
        <Section className="bg-secondary/10 py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-tertiary uppercase tracking-widest text-sm font-medium">Navdih & Zgodbe</span>
            <Heading size="xl">Patricia Pie Zapiski</Heading>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Več kot le moda. Zapiski o stilu, osebni preobrazbi in umetnosti oblačenja.
            </p>
          </div>
        </Section>

        {/* Post Grid */}
        <Section className="bg-background">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {journalPosts.map((post) => (
              <div key={post.id} className="group flex flex-col h-full">
                {/* Image Card */}
                <Link href={`/zapiski/${post.slug}`} className="block relative overflow-hidden aspect-4/3 mb-6 rounded-sm">
                   <CloudinaryImage
                      src={post.image}
                      alt={post.title}
                      fill
                      containerClassName="h-full w-full"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                </Link>
                
                {/* Content */}
                <div className="flex-1 flex flex-col items-start">
                   <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      <span className="text-tertiary font-medium">{post.category}</span>
                      <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                      <span>{post.date}</span>
                   </div>
                   
                   <Link href={`/zapiski/${post.slug}`} className="group-hover:text-tertiary transition-colors">
                      <h2 className="text-2xl font-heading mb-3 leading-tight">
                        {post.title}
                      </h2>
                   </Link>
                   
                   <p className="text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                      {post.excerpt}
                   </p>
                   
                   <div className="mt-auto">
                     <Link href={`/zapiski/${post.slug}`}>
                        <Button variant="outline" size="sm">Preberi več</Button>
                     </Link>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Newsletter Teaser */}
        <Section className="bg-secondary/5 text-center">
           <div className="max-w-xl mx-auto space-y-6">
              <Heading size="lg">Ne zamudi novih zapisov</Heading>
              <p className="text-muted-foreground">
                 Pridruži se naši skupnosti in prejemaj sveže nasvete o stilu ter vabila na dogodke neposredno v svoj nabiralnik.
              </p>
              {/* Note: In a real app, integrate the Newsletter component here directly or link to it */}
           </div>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
