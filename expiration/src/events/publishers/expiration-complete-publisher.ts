import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@udemy-tic/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
