import { useNavigate } from 'react-router-dom';
import Button from '../globals/Button';
import IconButton from '../globals/IconButton';
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="bg-backgroundDark text-white py-10 px-4 space-y-6">
      <div>
        <div
          className="flex items-center gap-x-2 mb-8"
          onClick={() => navigate('/')}
        >
          <img src="/img/logo.png" className="w-8 h-8" alt="logo" />
          <span className="font-redHatDisplay font-bold text-2xl">
            JobHuntly
          </span>
        </div>
        <p className="text-base text-secondary-100">
          Great platform for the job seeker that passionate about startups. Find
          your dream job easier.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <h6 className="mb-[18px]">About</h6>
          <ul className="space-y-4 text-base text-secondary-100">
            <li>Company</li>
            <li>Pricing</li>
            <li>Terms</li>
            <li>Advise</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h6 className="mb-[18px]">Ressources</h6>
          <ul className="space-y-4 text-base text-secondary-100">
            <li>Help Docs</li>
            <li>Guide</li>
            <li>Updates</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="mb-4">
          <h6 className="mb-2">Get job notifications</h6>
          <p className="text-base text-secondary-100">
            The latest job news, articles, sent to your inbox weekly.
          </p>
        </div>
        <form className="flex flex-col gap-y-2">
          <input
            type="text"
            name="email"
            className=""
            placeholder="Email address"
          />
          <div>
            <Button type="submit" onClick={() => {}} variant="primary">
              Subscribe
            </Button>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        <hr className="border-gray-600 border-2" />
        <p className="text-center font-medium text-gray-500">
          {new Date().getFullYear()} @ JobHuntly. All rights reserved.
        </p>
        <div className="flex justify-center gap-x-6 items-center">
          <IconButton
            className="!bg-gray-700 !border-gray-700"
            icon={<FaFacebookF size={15} />}
            onClick={() => {}}
            ariaLabel="facebook"
          />
          <IconButton
            className="!bg-gray-700 !border-gray-700"
            icon={<FaInstagram size={15} />}
            onClick={() => {}}
            ariaLabel="instagram"
          />
          <IconButton
            className="!bg-gray-700 !border-gray-700"
            icon={<FaDribbble size={15} />}
            onClick={() => {}}
            ariaLabel="dribbble"
          />
          <IconButton
            className="!bg-gray-700 !border-gray-700"
            icon={<FaLinkedinIn size={15} />}
            onClick={() => {}}
            ariaLabel="linkedin"
          />
          <IconButton
            className="!bg-gray-700 !border-gray-700"
            icon={<FaTwitter size={15} />}
            onClick={() => {}}
            ariaLabel="twitter"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
