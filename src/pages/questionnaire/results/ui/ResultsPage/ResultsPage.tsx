import { QuestionnaireLayout } from '../../../ui/QuestionnaireLayout';
import { Results } from '../Results';

export const ResultsPage = () => {
  return (
    <QuestionnaireLayout isDarkTheme={false} previous={null}>
      <Results />
    </QuestionnaireLayout>
  );
};
