import { HashtagItemProps } from "../../lib/types";

const HashtagItem = ({ company, onSelectedCompany }: HashtagItemProps) => {

  return (
    <li key={company}>
      <button onClick={() => onSelectedCompany(company)}>#{company}</button>
    </li>
  )
}

export default HashtagItem