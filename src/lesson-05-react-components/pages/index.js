import ActivitiesList from '@/components/ActivitiesList';
import ActivityForm from '@/components/ActivityForm';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <PageHeader tagline="Home page" />
      <ActivityForm />
      <ActivitiesList />
    </div>
  );
}
