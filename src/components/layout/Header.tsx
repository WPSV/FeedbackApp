import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import Pattern from "../Pattern";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import FeedbackForm from "../feedback/FeedbackForm";

const Header = () => {

  const addItemToList = useFeedbackItemsStore(state => state.addItemToList);

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  )
}

export default Header;