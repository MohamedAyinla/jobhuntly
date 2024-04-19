import { FiSearch } from 'react-icons/fi';
import Button from '../globals/Button';
import { HiOutlineLocationMarker } from 'react-icons/hi';

function HeroSection() {
  return (
    <section className="p-4 pb-8 bg-[url('/img/pattern.png')] bg-right-bottom">
      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-5xl">
            Discover more than{' '}
            <span className="text-accent-blue">5000+ Jobs</span>
          </h2>
          <img src="/img/lines.png" alt="illust" className="" />
        </div>
        <p>
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>
        <div className="bg-white p-4">
          <div className="gap-x-4 p-2">
            <FiSearch size={24} />
          </div>
          <div className="gap-x-4 p-2">
            <HiOutlineLocationMarker size={24} />
          </div>
          <Button className="w-full">Search my job</Button>
        </div>
        <div className="text-backgroundDark">
          <p>Popular :</p>
          <p className="font-medium">
            UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
