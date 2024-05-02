import { FiSearch } from 'react-icons/fi';
import Button from '../globals/Button';
import { HiOutlineLocationMarker } from 'react-icons/hi';

function HeroSection() {
  return (
    <section className="p-4 pb-8 bg-[url('/img/pattern.png')] bg-right-bottom">
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-semibold">
            Discover more than{' '}
            <span className="text-accent-blue">5000+ Jobs</span>
          </h2>
          <img src="/img/lines.png" alt="illust" className="" />
        </div>
        <p>
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>
        <div className="p-4 bg-white divide-y-2 ">
          <div className="flex items-center p-2 gap-x-4">
            <FiSearch size={24} />
            <p className="text-[#A8ADB7] text-[16px] ">Job title or keyword</p>
          </div>
          <div className="">
            <div className="flex items-center py-2 gap-x-4 ">
              <HiOutlineLocationMarker size={32} />
              <select id="country" name="country" autoComplete="country-name" className="block w-full px-1 text-[16px] rounded-md border-0 py-1.5 text-[#25324B]">
                <option className='text-[16px] px-4'>Florence, Italy</option>
                <option className='text-[16px]'>Dakar, Sénégal</option>
                <option className='text-[16px]'>Cotonou, Bénin</option>
            </select>
            </div>
            <Button className="w-full">Search my job</Button>
          </div>
        </div>
        <div className=" text-[#515B6F]">
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
