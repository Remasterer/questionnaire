type QuestionId = string;

export interface QuestionnaireQuestionIds {
  questionnaireId: string;
  questionId: QuestionId;
}

export type ForwardNext = string;

export type ConditionNext = {
  condition: {
    basedOn: string;
    equals: string;
  };
  next: QuestionId;
};

export type ConditionalNext = ConditionNext[];

export type Next = ForwardNext | ConditionalNext;

export interface Option {
  id: string;
  text: string;
  next: Next;
}

export enum ScreenType {
  SINGLE_CHOICE = 'singleChoice',
  DISCLAIMER = 'disclaimer'
}

export type PlaceholderValue = {
  sourceQuestionId: string;
  mapping: Record<string, string>;
};

export type PlaceholderValues = Record<string, PlaceholderValue>;

export interface Question {
  id: string;
  questionText: string;
  statement: string;
  screenType: ScreenType;
  options: Option[];
  previous?: string;
  placeholderValues: PlaceholderValues;
}
