import { Contact } from 'components/Contacts/Contact';
import { Outlet } from 'react-router-dom';

const PhoneBooksPage = () => {
  return (
    <div>
      <section>
        <Contact></Contact>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default PhoneBooksPage;
