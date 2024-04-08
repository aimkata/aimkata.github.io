import Image from 'next/image';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home({ allPostsData }) {
  return (
    <div>
      <section>
        <h1>Hi there 👋</h1>
        <p>
          My name is Aibek. I&apos;m an ex-software engineer of{' '}
          <a href="https://spotify.com/" target="_blank" rel="noopener noreferrer">
            Spotify
          </a>{' '}
          and creator of <Link href="/vibely">Vibely</Link>, a mobile app to create music videos
          with an audio visualization. I also produce electronic music as{' '}
          <Link href="/brakata">Brakata</Link> and publish them on streaming services.
        </p>
      </section>
      <section className="mb">
        <h2>My Apps 📱</h2>
        <Link href="/vibely">
          <Image
            className="rounded-[32px]"
            src="/vibely.png"
            width={200}
            height={200}
            alt="Vibely Logo"
          />
        </Link>
      </section>
      <section className="mb">
        <h2>My Music 🎧</h2>
        <iframe
          title="Brakata Tracks"
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/playlist/25O54nArGPTdhD5j8HapHw?utm_source=generator&theme=0"
          width="100%"
          height="380"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
