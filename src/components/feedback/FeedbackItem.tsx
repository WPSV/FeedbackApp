import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";
import { useState } from "react";

type FeedbackItemProps = { feedbackItem: TFeedbackItem }

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

  const handleToogle = () => {
    setIsOpen(!isOpen);
  }

  const handleUpvoteCount = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCount(upvoteCount => ++upvoteCount);
    event.currentTarget.disabled = true;
    event.stopPropagation();
  }

  return (
    <li className={`feedback ${isOpen ? "feedback--expand" : ""}`} onClick={handleToogle}>
      <button onClick={handleUpvoteCount}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  )
}

export default FeedbackItem;