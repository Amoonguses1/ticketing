import { Publisher, Subjects, TicketUpdatedEvent } from '@udemy-tic/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
