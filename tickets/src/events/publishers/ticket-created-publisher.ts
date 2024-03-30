import { Publisher, Subjects, TicketCreatedEvent } from '@udemy-tic/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
