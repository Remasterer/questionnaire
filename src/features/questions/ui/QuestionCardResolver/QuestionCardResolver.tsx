import { Question, ScreenType } from '@/entities/question';

import { DisclaimerCard } from '../DisclaimerCard';
import { SingleChoiceQuestionCard } from '../SingleChoiceQuestionCard';

interface Props
  extends Pick<
    Question,
    'questionText' | 'placeholderValues' | 'id' | 'options' | 'statement' | 'screenType'
  > {}

export const QuestionCardResolver = ({
  id,
  options,
  placeholderValues,
  questionText,
  statement,
  screenType
}: Props) => {
  switch (screenType) {
    case ScreenType.SINGLE_CHOICE:
      return (
        <SingleChoiceQuestionCard
          id={id}
          options={options}
          placeholderValues={placeholderValues}
          questionText={questionText}
        />
      );
    case ScreenType.DISCLAIMER:
      return <DisclaimerCard options={options} questionText={questionText} statement={statement} />;
    default:
      return null;
  }
};
