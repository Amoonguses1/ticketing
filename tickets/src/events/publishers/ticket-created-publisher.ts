import { Publisher, Subjects, TicketCreatedEvent } from '@udemy-tic/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
