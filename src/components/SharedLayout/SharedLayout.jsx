import { NavMenu } from 'components/NavMenu/NavMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <Suspense fallback={<p>...Loading page</p>}>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
};
export { SharedLayout };
