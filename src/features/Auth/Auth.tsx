import { SignUpForm } from '@features/Auth/SignUpForm';
import { FC, useState } from 'react';
import { Tabs } from '@components/Tabs';

const tabsData = [
  { id: '0', label: 'Регистрация' },
  { id: '1', label: 'Вход' },
];

interface AuthProps {}

export const Auth: FC<AuthProps> = () => {
  const [selectedTab, setSelectedTab] = useState(tabsData[0].id);

  const handleTabSelect = (id) => {
    setSelectedTab(id);
  };

  return (
    <div className="w-full rounded-lg bg-white max-w-md h-full">
      <Tabs tabs={tabsData} onTabSelect={handleTabSelect} />
      <div className="py-6 px-4">
        {selectedTab === '0' ? <SignUpForm /> : <div>Sign In Form</div>}
      </div>
    </div>
  );
};