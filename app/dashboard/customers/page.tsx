import {
  fetchFilteredCustomers,
  fetchFilteredCustomersPages,
} from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import Pagination from '@/app/ui/invoices/pagination';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  //
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const customers = await fetchFilteredCustomers(query, currentPage);
  const totalPages = await fetchFilteredCustomersPages(query);
  //
  return (
    <div className="flex ">
      <CustomersTable customers={customers} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
