import { useMemo } from 'react';
import { useGetItemsQuery } from '../../state/services/api-service';
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';

const Jetsetter = () => {

    const { data, currentData, isLoading, isError, isFetching, isSuccess, isUninitialized } = useGetItemsQuery();
    // data is the data returned from the API
    // currentData is the data returned from the API, but only if it's different from the previous data
    // isLoading is true when the query is in the process of fetching data - only on 1st load
    // isFetching is true when a request has been initiated but not yet resolved - UPDATING THE DATA after first load
    // isUninitialized is true when the query has not yet been executed
    // isSuccess is true when the query has successfully fetched data
    // isError is true when the query has failed to fetch data

    const items = useMemo (() => data?.items || [], [data]);

  return (
    <main className="flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
      <Header count={0} />
      {isUninitialized && <p>Uninitialized...</p>}
      {isLoading && <div>Loading...</div>}
      {isFetching && <div>Updating...</div>}
      {isError && <div>Error...</div>}
      {isSuccess && <div>Success...</div>}
      <NewItem />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList title="Items" items={items} />
      </section>
      <MarkAllAsUnpacked />
    </main>
  );
};

export default Jetsetter;
