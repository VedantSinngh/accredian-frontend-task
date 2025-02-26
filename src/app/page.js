import NavBar from '@/components/NavBar/NavBar';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import RewardTable from '@/components/RewardTable/RewardTable';
import FAQ from '@/components/FAQ/FAQ';
import ChatSupport from '@/components/ChatSupport/ChatSupport';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <RewardTable />
      <FAQ />
      <ChatSupport />
      <Footer />
    </div>
  );
}