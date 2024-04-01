// Extends the document content status enum to include 'in-progress' and 'finished'

import { StringOrTemplateHeader } from '@tanstack/react-table';
import { DocumentChatMessageSender, PageStatus } from '../../api/src/schema.generated';

// Since those values are only of interest to the frontend, they are not included in the schema
enum LocalDocStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  FINISHED = 'FINISHED'
}
export type DocStatus = PageStatus | LocalDocStatus;
export const DocStatus = { ...LocalDocStatus, ...PageStatus };

export type DocProcessingData = {
  documentId: string;
  audioAvailable: boolean;
  audioTokenCost: number | null;
  tokenCost: number;
};

/**
 * A document chat history
 */
export type DocChatHistory = {
  id: string;
  messages: DocChatMessage[];
};

/**
 * A chat message in the document chat
 */
export type DocChatMessage = {
  id: string;
  text: string;
  sender: DocumentChatMessageSender | null;
  createdAt: string;
};

export { LocalDocStatus };
sender: DocumentChatMessageSender;
