import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/slice";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ContactList from "../../components/ContactList/ContactList";

const ContactPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const error = useSelector(selectError);
  return (
    <div>
      {error && <p> Error: {error}</p>}
      <ContactForm />
      <SearchBox />
      {loading ? <Loader /> : <ContactList />}
    </div>
  );
};

export default ContactPage;
