import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { getUser } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  const users = getUser('user@nextmail.com');

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>
          Chela cantik punya aku
        </h1>
      </div>
    </div>
  );
}
