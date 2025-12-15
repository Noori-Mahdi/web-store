import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../shadcn';

const LanguageButton = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  return (
    <Button
      className="flex w-9 h-9 text-foreground bg-background hover:text-black  border cursor-pointer items-center justify-center p-2 font-semibold text-sm"
      onClick={toggleLanguage}
    >
      {language}
    </Button>
  );
};

export default LanguageButton;
