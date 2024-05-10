export type TFeedbackItem = {
  id: number,
  upvoteCount: number,
  badgeLetter: string,
  company: string,
  text: string,
  daysAgo: number,
}

export type TFeedbackFormProps  = {
  onAddToList: (text: string) => Promise<void>,
}