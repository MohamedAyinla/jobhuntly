import { useNavigate } from 'react-router-dom';
import IconButton from '../globals/IconButton';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-x-2" onClick={() => navigate('/')}>
        <img src="/img/logo.png" className="w-8 h-8" alt="logo" />
        <span className="font-redHatDisplay font-bold text-2xl">JobHuntly</span>
      </div>

      <IconButton
        icon={<HiOutlineMenuAlt2 size={20} />}
        onClick={() => {}}
        ariaLabel="Toggle menu"
      />
    </div>
  );
}

export default Header;
