import fs from 'fs/promises';
import path from 'path';

import { Question, QuestionnaireQuestionIds } from './types';

class QuestionsApiService {
  private readonly directoryPath: string;

  constructor() {
    this.directoryPath = path.join(process.cwd(), 'data/questionnaires');
  }

  public async getFirstQuestionId(): Promise<QuestionnaireQuestionIds> {
    const allQuestionnairesIds = await this.getAllQuestionnairesIds();

    if (!allQuestionnairesIds.length) throw new Error('No questionnaires found.');

    const questionnaireId = allQuestionnairesIds[0];
    const questionIds = await this.getAllQuestionIdsByQuestionnaireId(questionnaireId);

    if (!questionIds.length)
      throw new Error(`No questions found in questionnaire ${questionnaireId}.`);

    const questionId = questionIds[0];

    return { questionnaireId, questionId };
  }

  public async getAllQuestionsIds(): Promise<QuestionnaireQuestionIds[]> {
    const allQuestionnairesIds = await this.getAllQuestionnairesIds();

    const promises = allQuestionnairesIds.map(async (questionnaireId) => {
      const questionIds = await this.getAllQuestionIdsByQuestionnaireId(questionnaireId);

      return questionIds.map((questionId) => ({ questionId, questionnaireId }));
    });

    const result = await Promise.all(promises);

    return result.flat();
  }

  private async getAllQuestionnairesIds(): Promise<string[]> {
    const files = await fs.readdir(this.directoryPath);
    return files
      .filter((fileName) => fileName.endsWith('.json'))
      .map((fileName) => fileName.replace('.json', '').trim());
  }

  private async getAllQuestionIdsByQuestionnaireId(questionnaireId: string): Promise<string[]> {
    const questionnaireData = await this.getQuestionnaireDataById(questionnaireId);

    return questionnaireData.questions?.map((q: { id: string }) => q.id) || [];
  }

  private async getQuestionnaireDataById(questionnaireId: string) {
    const filePath = path.join(this.directoryPath, `${questionnaireId}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');

    return JSON.parse(fileContent);
  }

  public async getQuestion({
    questionId,
    questionnaireId
  }: QuestionnaireQuestionIds): Promise<Question> {
    const questionnaireData = await this.getQuestionnaireDataById(questionnaireId);

    const question = questionnaireData.questions.find((q: Question) => questionId === q.id);

    return question;
  }
}

export const questionsApiServiceInstance = new QuestionsApiService();
