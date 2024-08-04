import Header from "../../components/header";
import ConnectedAccounts from "../../components/settings/connectedAccounts";
import DangerZone from "../../components/settings/dangerZone";
import Notifications from "../../components/settings/notifications";
import Profile from "../../components/settings/profile";
import Security from "../../components/settings/security";

const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-slate-900">
      <Header title="Settings" />
      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};
export default SettingsPage;
