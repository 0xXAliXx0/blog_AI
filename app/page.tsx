import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Hello Next.js 15</h1>
      
      <div className="text-center w-full mb-8">
        <h2 className="text-3xl font-semibold mb-6">AI IS NOT TAKING PROGRAMMERS JOBS</h2>
      </div>
      
      <div className="prose w-full space-y-4">
        <p className="text-lg">
          Now that the AI boom has occurred, many started using AI editors/tools to make apps that will never hit the production line. Let me explain:
        </p>
        
        <p className="text-lg">
          First of all, let&apos;s talk about the advantages and disadvantages of AI. It lets us code without having to memorize syntax. 
          It can handle simple tasks and help with searching and explaining programming concepts, but the problem is it struggles with complex stuff and often breaks, makes bugs, or hallucinates. 
          It just isn&apos;t ideal to use yet at the highest level.
        </p>
        
        <p className="text-lg">
          Secondly, you have to remember that AI trains on public data, meaning that any app you&apos;re trying to make with AI probably has an open-source, bug-free version 
          of the same thing but better. AI tends to pick the most popular data, and since most of the code that people post on the internet isn&apos;t optimal, AI will 
          pick that less useful code more than the good, useful code.
        </p>
        
        <p className="text-lg">
          And lastly, people need to realize that CEOs can oversell capabilities, often pushing expectations super high even though
          the technology actually isn&apos;t there yet.
        </p>
      </div>
      
      <Link href="/about" className="mt-8 text-blue-500 underline text-lg">
        Go to About page
      </Link>
    </main>
  );
}
