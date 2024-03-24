// External Library Import
import {FlashList} from '@shopify/flash-list';
import {SafeAreaView} from 'react-native';
import React from 'react';
// Internal Library Import
import {AppBar, Card, CardSkeleton} from 'components';
import {useGetBlogsQuery} from 'services';
import {ProductsDataType} from 'types';

const Home = () => {
  // const b = 12;
  const c = 12;
  const {data, isLoading} = useGetBlogsQuery(undefined);
  const renderItem = ({item}: {item: ProductsDataType}) => {
    // Render each item here
    return <Card item={item} isLoading={isLoading} />;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppBar />
      {isLoading ? (
        <>
          <CardSkeleton />
        </>
      ) : (
        <FlashList
          data={data?.products}
          estimatedItemSize={50}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
{
  /* 
   - @typescript-eslint/eslint-plugin ✅
   - @typescript-eslint/parser ✅
   - eslint-plugin-import ✅
   - eslint-plugin-react ✅
   - prettier ✅
   - husky  ✅
   - eslint-config-airbnb
   - eslint-config-airbnb-typescript
   - eslint-import-resolver-typescript
   - eslint-plugin-jsx-a11y
   - eslint-plugin-react-hooks

   ....................................
   - eslint-plugin-prettier
   - eslint-config-prettier

   ======

   -     "lint": "eslint . --ext .ts,.tsx", ✅
   -     "precommit": "concurrently 'npm run tsc' 'npm run lint'",
   -     "prepare": "husky install"


*/
}
