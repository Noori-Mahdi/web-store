import { useLanguage } from '../../context/LanguageContext';
import { Label, Switch } from '../shadcn';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch onCheckedChange={toggleLanguage} id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
};

export default LanguageSwitcher;
