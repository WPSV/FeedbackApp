import { RefObject, useRef, useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";
import { TFeedbackFormProps } from "../../lib/types";

const FeedbackForm = ({ onAddToList }: TFeedbackFormProps) => {

  const [text, setText] = useState("");
  const refForm: RefObject<HTMLFormElement> = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;

    if (newText.length > MAX_CHARACTERS) return;

    setText(event.target.value);
  }

  const charCount = MAX_CHARACTERS - text.length;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = text.includes("#") && text.length >= 10;
    const formClass = isValid ? "form form--valid" : "form form--invalid";

    if (refForm.current) {
      refForm.current.className = formClass;
    }

    if (!isValid) {
      return;
    }

    onAddToList(text);
    setText("");
  }

  const handleFocus = () => {
    if (refForm.current) {
      refForm.current.className = "form";
    }
  }

  return (
    <form ref={refForm} className="form" onSubmit={handleSubmit}>
      <textarea
        id="feedback-textarea"
        placeholder=""
        onChange={handleChange}
        value={text}
        onFocus={handleFocus}
        spellCheck={false}
        maxLength={MAX_CHARACTERS}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default FeedbackForm;